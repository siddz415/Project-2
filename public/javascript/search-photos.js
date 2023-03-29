const cityName = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];
console.log(cityName);

const displayImages = (city) => {
  fetch("/api/keys")
    .then((res) => res.json())
    .then((data) => {
      const pexelApi = "https://api.pexels.com/v1/search?query=" + city;
      console.log(pexelApi);
      fetch(pexelApi, {
        headers: {
          Authorization: data.apiKey,
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((photoData) => {
              console.log(photoData);
              displayPhotos(photoData);
            });
          } else {
            alert("Images Not Found");
          }
        })
        .catch((error) => {
          alert("Unable to connect to pexels.");
        });
    });
};

displayImages(cityName);

const mainEl = document.querySelector("#photos");

const displayPhotos = (dataObj) => {
  const imageArray = dataObj.photos;
  for (var i = 0; i < imageArray.length; i++) {
    const image = imageArray[i].src.portrait;
    const alt = imageArray[i].alt;
    console.log(image);
    console.log(alt);

    var imageEl = document.createElement("div");
    imageEl.innerHTML = `<img src="${image}" alt="${alt}" width="200" height="300">`;
    mainEl.appendChild(imageEl);
  }
};

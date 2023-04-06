const stars  = document.getElementById("no-rate");
let ratings;
async function newFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content-body"]').value;
    const photo = document.getElementById("user_image").files[0];
    const city_location = document.querySelector('input[name="post-city-location"]').value;
    const trip_budget = document.querySelector('input[name="trip_budget"]').value;
   

    let formData = new FormData();
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
        city_location,
        trip_budget,
        ratings
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json()
    const post_id = res.id
    console.log("JS post_id", post_id)

    if (response.ok) {
     console.log("ok");
    } else {
      alert(response.statusText);
    }
    // console.log(photo)
    formData.append("photo", photo);
    formData.append("id", post_id)
    console.log("form data", formData.get("photo"))
    const response2 = await fetch(`/api/pic`, {
      method: 'POST',
      body: formData,
    });
    if (response2.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }

  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
    stars.addEventListener('click',(event) => {
      if(!event.target.matches('input[name="ratings"]')) {return}
      let selected = document.querySelector('input[name="ratings"]:checked')
      ratings = selected.value;
    })

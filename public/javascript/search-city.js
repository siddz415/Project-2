async function newSearchHandler(event) {
  event.preventDefault();

  let cityLocation = document.querySelector("#city-search").value.trim();
  if (cityLocation) {
    const response = await fetch(`/api/blogs/location/${cityLocation}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/blogs/location/${cityLocation}`);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#city-search-btn")
  .addEventListener("click", newSearchHandler);

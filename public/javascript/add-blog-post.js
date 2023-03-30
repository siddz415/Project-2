async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
    const photo = document.getElementById("user_image").files[0];
    const city_location = document.querySelector('input[name="post-city-location"]').value;
    let formData = new FormData();
    const response = await fetch(`/api/blogs`, {
        method: "POST",
        body: JSON.stringify({
            title,
            content,
            city_location
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const res = await response.json();
    console.log(res);
    const post_id = res.id
    console.log("JS post_id", post_id)

    if (response.ok) {
        // document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    }
    console.log(photo)
    formData.append("photo", photo);
    formData.append("id", post_id)
    console.log("form data", formData.get("photo"))
    const response2 = await fetch(`/api/pic`, {
        method: 'POST',
        body: formData,
    });
    if (response2.ok) {
        // document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);

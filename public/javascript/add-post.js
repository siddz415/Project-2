async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('input[name="post-content"]').value;
  // const image = document.querySelector('input[name="post-image"]').
  //  files[0];
  const trip_budget = document.querySelector('input[name="trip_budget"]').value;
  const ratings = document.querySelector('input[name="ratings"]').value;
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
      //  image,
      trip_budget,
      ratings,

    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}


document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

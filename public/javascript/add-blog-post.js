async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content-body"]').value;
    const city_location = document.querySelector('input[name="post-city-location"]').value;
    const trip_budget = document.querySelector('input[name="trip_budget"]').value;
    const ratings = document.querySelector('input[name="ratings"]').value;
    
    const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
            city_location,
            trip_budget,
            ratings
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
async function newFormHandler(event) {
    event.preventDefault();
    let photo = document.getElementById("image-file").files[0];
    let formData = new FormData();
   
    console.log(photo);
    formData.append("photo", photo);
    console.log(formData);
    const response = await fetch(`/api/pic`, {
      method: 'POST',
      body: formData,
    });
    
    // if (response.ok) {
    //   alert('pic uploaded');
    // } else {
    //   alert('Failed to add pet');
    // }
  }

  document
  .querySelector('#button')
  .addEventListener('click', newFormHandler);
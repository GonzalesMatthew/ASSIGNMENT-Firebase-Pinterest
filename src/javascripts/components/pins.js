const showPins = (array) => {
  // RESET USER-CONTAINER
  document.querySelector('#app').innerHTML = `
  <button class="my-4 btn btn-success" id="add-pin">Add New Pin</button>
  <button class="my-4 btn btn-info" id="back-to-boards">Back To Boards</button>
  <div id="container">
      <h1>
      <span class="p3">P</span>
      <span class="i3">i</span>
      <span class="n3">n</span>
      <span class="s3">s</span>
      </h1>
      <div id="user-container" class="row justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg">
      </div>
    </div>`;

  // SHOW PINS
  array.forEach((item) => {
    document.querySelector('#user-container').innerHTML += `
    <div class="col-sm-3">
      <div class="card v-25 m-3 p-4 shadow-lg rounded">
        <h5 class="card-title">${item.title}</h5>
        <img class="card-img-top px-2 shadow-lg rounded overflow-hidden" src=${item.image} alt=${item.title} style="height:200px;">
        <div class="card-body">
          <hr>
          <button class="btn btn-dark shadow-lg" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
          <button class="btn btn-danger shadow-lg" id="delete-pin--${item.firebaseKey}">Remove Pin</button>
        </div>
      </div>
    </div>`;
  });
};

export default showPins;

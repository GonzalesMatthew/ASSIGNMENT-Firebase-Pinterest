const showBoards = (array) => {
  document.querySelector('#app').innerHTML = `
  <button class="my-4 btn btn-success" id="add-board">Create New Board</button>
    <div id="container">
      <h1>Boards</h1>
      <div id="user-container" class="row justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg">
      </div>
    </div>`;

  array.forEach((item) => {
    document.querySelector('#user-container').innerHTML += `
    <div class="col-sm-3">
      <div class="card v-25 m-3 p-4 shadow-lg rounded">
        <h5 class="card-title">${item.title}</h5>
        <img class="card-img-top px-2 shadow-lg rounded overflow-hidden" src=${item.image} alt=${item.title} style="height:200px;">
        <div class="card-body">
          <hr>
          <button class="btn btn-info shadow-lg" data-toggle="modal" data-target="#formModal" id="view-board-btn--${item.firebaseKey}">View Board</button>
          <button class="btn btn-danger shadow-lg" id="delete-board--${item.firebaseKey}">Delete Board</button>
        </div>
      </div>
    </div>
    `;
  });
};

export default showBoards;

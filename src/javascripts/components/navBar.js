const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4 d-flex">
      <a id='brand' class="navbar-brand title" href="#">Firebase Pinterest</a>
      <input id="search-bar" placeholder="Search Boards" aria-label="Search bar for boards">
      <btn type='button' id='dark-mode' class='btn btn-dark btn-sm ml-auto'>Dark Mode</btn>
    </nav>
    `;
};

export default navBar;

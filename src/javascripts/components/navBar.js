const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
      <a id='brand' class="navbar-brand title" href="#">Firebase Pinterest</a>
      <input id="search-bar" placeholder="Search Boards" aria-label="Search bar for boards">
    </nav>
    `;
};

export default navBar;

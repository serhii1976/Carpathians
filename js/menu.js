(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-btn"),
    closeMenuBtn: document.querySelector(".mob-menu__btn"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

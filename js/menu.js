(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-btn"),
    closeMenuBtn: document.querySelector(".mob-menu__btn"),
    closeMenuLink: document.querySelector(".mob-menu__list"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuLink.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

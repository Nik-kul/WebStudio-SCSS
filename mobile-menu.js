(() => {
  const refs = {
    openMenuBtn: document.querySelector(".js-open-menu"),
    closeMenuBtn: document.querySelector(".js-close-menu"),
    menu: document.querySelector(".js-menu-container"),
    backdrop: document.querySelector(".js-backdrop"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.backdrop.addEventListener("click", toggleMenu);

  function toggleMenu() {
    const isMenuOpen = refs.openMenuBtn.getAttribute("aria-expanded") === "true";

    refs.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    refs.menu.classList.toggle("is-open");
    refs.backdrop.classList.toggle("is-open");
  }
})();

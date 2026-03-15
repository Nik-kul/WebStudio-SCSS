(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) return;

  const toggleMenu = () => {
    const isMenuOpen = refs.openMenuBtn.getAttribute("aria-expanded") === "true";

    refs.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    refs.menu.classList.toggle("is-hidden");

    document.body.style.overflow = refs.menu.classList.contains("is-hidden")
      ? ""
      : "hidden";
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  refs.menu.addEventListener("click", (event) => {
    if (event.target === refs.menu) {
      toggleMenu();
    }
  });
})();

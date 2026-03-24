(() => {
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const menuContainer = document.querySelector(".js-menu-container");

  if (!openMenuBtn || !closeMenuBtn || !menuContainer) return;

  const toggleMenu = () => {
    menuContainer.classList.toggle("is-open");

    const isOpen = menuContainer.classList.contains("is-open");
    openMenuBtn.setAttribute("aria-expanded", isOpen);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
})();

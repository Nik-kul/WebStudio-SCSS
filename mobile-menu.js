(() => {
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  if (!openBtn || !closeBtn || !menu) return;

  const toggleMenu = () => {
    menu.classList.toggle("is-hidden");

    document.body.style.overflow = menu.classList.contains("is-hidden")
      ? ""
      : "hidden";
  };

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  menu.addEventListener("click", event => {
    if (event.target === menu) {
      toggleMenu();
    }
  });
})();

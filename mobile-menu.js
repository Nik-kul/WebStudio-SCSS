(() => {
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  const toggleMenu = () => {
    menu.classList.toggle("is-hidden");

    document.body.style.overflow =
      menu.classList.contains("is-hidden") ? "" : "hidden";
  };

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
})();

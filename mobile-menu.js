(() => {
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  if (!openBtn || !closeBtn || !menu) return;

  const openMenu = () => {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);


  menu.addEventListener("click", (e) => {
    if (e.target === menu) closeMenu();
  });

  // ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

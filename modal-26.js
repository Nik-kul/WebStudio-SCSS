(() => {
  const openBtn = document.querySelector("[data-modal-open]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const backdrop = document.querySelector("[data-modal]");

  if (!openBtn || !closeBtn || !backdrop) return;

  const HIDDEN_CLASS = "is-hidden";

  const openModal = () => {
    backdrop.classList.remove(HIDDEN_CLASS);
    document.body.style.overflow = "hidden"; // прибрати скрол під модалкою
  };

  const closeModal = () => {
    backdrop.classList.add(HIDDEN_CLASS);
    document.body.style.overflow = ""; // повернути скрол
  };

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  // Закриття по кліку на фон (backdrop)
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Закриття по Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.classList.contains(HIDDEN_CLASS)) {
      closeModal();
    }
  });

  // (опційно) щоб форма не перезавантажувала сторінку
  const form = backdrop.querySelector(".modal-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // тут можеш відправляти дані на сервер / показати "успішно"
      closeModal();
      form.reset();
    });
  }
})();

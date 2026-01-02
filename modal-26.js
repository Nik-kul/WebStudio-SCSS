(() => {
  const refs = {
    open: document.querySelector("[data-modal-open]"),
    close: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".modal__form"),
  };

  if (!refs.modal) return;

  // Відкрити модалку
  refs.open?.addEventListener("click", () => {
    refs.modal.classList.remove("modal--hidden");
    document.body.classList.add("no-scroll");
  });

  // Закрити по кнопці
  refs.close?.addEventListener("click", closeModal);

  // Закрити по кліку на фон (overlay)
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) closeModal();
  });

  // Закрити по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !refs.modal.classList.contains("modal--hidden")) {
      closeModal();
    }
  });

  function closeModal() {
    refs.modal.classList.add("modal--hidden");
    document.body.classList.remove("no-scroll");
  }

  // Закриття через submit
  refs.form?.addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal();
    refs.form.reset();
  });
})();

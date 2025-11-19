
(() => {
  const refs = {
    open: document.querySelector("[data-modal-open]"),
    close: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".modal-form"),
  };

  // Відкрити модалку
  refs.open.addEventListener("click", () => {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");
  });

  // Закрити модалку
  refs.close.addEventListener("click", closeModal);

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  }

  // Автоматичне закриття після Submit
  refs.form.addEventListener("submit", (e) => {
    e.preventDefault(); // щоб не перезавантажувало сторінку

    closeModal();

    refs.form.reset(); // очистити після відправки
  });
})();

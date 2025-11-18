(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector("form"),
    submitBtn: document.querySelector(".submit")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  // Кнопка Закрити — завжди активна
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Активуємо submit, якщо всі поля заповнені
  refs.form.addEventListener("input", () => {
    const inputs = refs.form.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    refs.submitBtn.disabled = !allFilled;
  });

  // Submit → закриваємо та очищаємо
  refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    refs.form.reset();
    refs.submitBtn.disabled = true;
    toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

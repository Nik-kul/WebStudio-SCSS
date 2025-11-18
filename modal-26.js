(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

})();

const modal = document.querySelector("[data-modal]");
const closeBtn = document.querySelector("[data-modal-close]");
const form = document.querySelector("form");

form.addEventListener("input", () => {
  if (form.checkValidity()) {
    closeBtn.disabled = false;
  } else {
    closeBtn.disabled = true;
  }
});

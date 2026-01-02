document.addEventListener("DOMContentLoaded", () => {
  const openBtns = document.querySelectorAll("[data-modal-open]");
  const modal = document.querySelector("[data-modal]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const form = modal?.querySelector(".modal__form");

  console.log("openBtns:", openBtns.length, "modal:", !!modal, "closeBtn:", !!closeBtn, "form:", !!form);

  if (!modal || !openBtns.length || !closeBtn) return;

  const openModal = () => {
    modal.classList.remove("modal--hidden");
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    modal.classList.add("modal--hidden");
    document.body.classList.remove("no-scroll");
  };

  openBtns.forEach((btn) => btn.addEventListener("click", openModal));
  closeBtn.addEventListener("click", closeModal);

  // клік по фону
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("modal--hidden")) {
      closeModal();
    }
  });

  // submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal();
      form.reset();
    });
  }
});

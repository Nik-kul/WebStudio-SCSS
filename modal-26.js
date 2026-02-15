(() => {
  const openBtn = document.querySelector("[data-modal-open]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const backdrop = document.querySelector("[data-modal]");

  if (!openBtn || !closeBtn || !backdrop) return;

  const HIDDEN_CLASS = "is-hidden";

  const openModal = () => {
    backdrop.classList.remove(HIDDEN_CLASS);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    backdrop.classList.add(HIDDEN_CLASS);
    document.body.style.overflow = ""; 
  };

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);


  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });


  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.classList.contains(HIDDEN_CLASS)) {
      closeModal();
    }
  });


  const form = backdrop.querySelector(".modal-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
 
      closeModal();
      form.reset();
    });
  }
})();


let accordionButtons = document.querySelectorAll(".accordion-button");
let prev = null;

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let item = button.closest(".accordion-item");

    if (prev && prev !== item) {
      prev.classList.remove("active");
    }

    item.classList.toggle("active");

    prev = item.classList.contains("active") ? item : null;
  });
});

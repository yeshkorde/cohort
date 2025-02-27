const accordionItem = document.querySelectorAll(".accordion-item");
const accordionButton = document.querySelectorAll(".accordion-button");
let prev = -1;

accordionItem.forEach((item, i) => {

  item.addEventListener("click", (e) => {
    e.stopPropagation();

    if (prev === i) {
      accordionItem[i].classList.toggle("active");
      accordionButton[i].classList.toggle("active");
      return;
    }

    if (prev !== -1) {
      accordionItem[prev].classList.remove("active");
      accordionButton[prev].classList.remove("active");
    }

    accordionItem[i].classList.add("active");
    accordionButton[i].classList.add("active");

    prev = i;
  });
});

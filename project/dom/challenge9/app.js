let isOn = false;
let toggle_btn = document.querySelector(".toggle-btn");
let close_btn = document.querySelector(".close-btn");
let panel = document.querySelector(".panel");
let content = document.querySelector(".content")

function setISON(){
    if (isOn) {
        panel.style. transform = "translateX(-105%)"
      } else {
          panel.style. transform = "translateX(0%)"
      }
}

toggle_btn.addEventListener("click", (e) => {
  e.stopPropagation()
  isOn = true;
  setISON()
});
close_btn.addEventListener("click", () => {
  isOn = false;
  setISON()
});


document.body.addEventListener("click", () => {
    isOn = false;
    setISON()
  });
  
  
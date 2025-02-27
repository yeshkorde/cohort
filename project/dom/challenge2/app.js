let mainHeading = document.getElementById("mainHeading");
let redButton = document
  .getElementById("redButton")
  .addEventListener("click", () => (mainHeading.style.color = "#e74c3c"));
let greenButton = document
  .getElementById("greenButton")
  .addEventListener("click", () => (mainHeading.style.color = "#2ecc71"));
let blueButton = document
  .getElementById("blueButton")
  .addEventListener("click", () => (mainHeading.style.color = "#3498db"));
let purpleButton = document
  .getElementById("purpleButton")
  .addEventListener("click", () => (mainHeading.style.color = "#9b59b6"));
let resetButton = document
  .getElementById("resetButton")
  .addEventListener("click", () => (mainHeading.style.color = "#000"));

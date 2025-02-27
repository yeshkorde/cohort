const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

const jobInput = document
  .getElementById("jobInput")
  .addEventListener("input", (e) => {
    if (!e.target.value) {
      jobDisplay.innerText = "Not provided";
    } else {
      jobDisplay.innerText = e.target.value;
    }
  });


  
const ageInput = document
  .getElementById("ageInput")
  .addEventListener("input", (e) => {
    if (!e.target.value) {
      ageDisplay.innerText = "Not provided";
    } else {
      ageDisplay.innerText = e.target.value;
    }
  });



const bioInput = document
  .getElementById("bioInput")
  .addEventListener("input", (e) => {
    if (!e.target.value) {
      bioDisplay.innerText = "Not provided";
    } else {
      bioDisplay.innerText = e.target.value;
    }
  });


const nameInput = document
  .getElementById("nameInput")
  .addEventListener("input", (e) => {
    if (!e.target.value) {
      nameDisplay.innerText = "Not provided";
    } else {
      nameDisplay.innerText = e.target.value;
    }
  });

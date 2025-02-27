
const bulb = document.getElementById("bulb")
const toggleButton = document.getElementById("toggleButton")
const status1 = document.getElementById("status")

let isOn = false

toggleButton.addEventListener("click",()=>{
isOn = !isOn
if(isOn){
    bulb.classList.remove("off")
    document.body.classList.add("dark-mode")
    toggleButton.innerText = "Turn Off"
    status1.innerText = "Status: On"
}else{
    bulb.classList.add("off")
    document.body.classList.remove("dark-mode")
     toggleButton.innerText = "Turn On"
      status1.innerText = "Status: Off"
}
})

console.log(isOn);

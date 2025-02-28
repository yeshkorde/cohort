let digital_clock = document.querySelector(".digital-clock");
let handsecond = document.querySelector(".second");
let handminute = document.querySelector(".minute");
let handhour = document.querySelector(".hour");
let dateelement  = document.querySelector(".date");    
function channgeTime() {
  setInterval(() => {
    let date = new Date();

    let hovers = date.getHours()>12?date.getHours()-12:date.getHours();  
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = `${hovers > 10 ? hovers : "0" + hovers}:${
      minutes > 10 ? minutes : "0" + minutes
    }:${seconds > 9 ? seconds : "0" + seconds}`;
    digital_clock.innerText = time;
    handsecond.style.transform = `rotate(${seconds * 6}deg)`;
    handminute.style.transform = `rotate(${minutes * 6}deg)`;
    handhour.style.transform = `rotate(${hovers * 30}deg)`;
  });
}

channgeTime();

function changeDate() { 
    setInterval(() => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() +1;
        let year = date.getFullYear();
        let fullDate = `${day > 10 ? day : "0" + day}/${
        month > 10 ? month : "0" + month
        }/${year}`;
        dateelement.innerText = fullDate;
    });
}   





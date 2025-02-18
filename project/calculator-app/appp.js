const data = document.querySelectorAll(".data");
const display = document.querySelector(".display");
const result = document.querySelector(".result")
let cal = "";


const changeDisplay = (text) =>{
display.innerHTML = text
}

data.forEach((d) => {
  d.addEventListener("click", (e) => {
    cal += e.target.innerText;
    changeDisplay(cal)
  });
});

const evaluateExpression = (expression) => {
    try {
        const formattedExpression = expression.replace(/x/g, '*');
        return eval(formattedExpression);
    } catch (error) {
        return "Error";  
    }
};


result.addEventListener("click",()=>{
const data = evaluateExpression(cal);
changeDisplay(data)
})


document.querySelector("#clear").addEventListener("click",()=>{
    changeDisplay("")
    cal = ""
})
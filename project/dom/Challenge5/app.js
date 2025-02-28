const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
  {
    url:"https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
    caption:"nature"
  }
];


const carouselTrack = document.getElementById("carouselTrack");
const captionElement = document.getElementById("caption");
const prevButtonElement = document.getElementById("prevButton");
const nextButtonElement = document.getElementById("nextButton");
const carouselNavElement = document.getElementById("carouselNav");
const autoplayElement = document.getElementById("autoPlayButton");
const timerElement = document.getElementById("timerDisplay");

let isAutoPlayOn = false
let autoPlay = null
let transformValue = 0;
let i = 0;



function changeTransform(ind) {
  carouselTrack.style.transform = `translateX(-${ind * 100}%)`;
  changeActive(ind);
  setText(ind);
}

captionElement.innerText = images[0].caption;

function setText(ind) {
  captionElement.innerText = images[ind].caption;
}

images.forEach((img) => {
  let image = document.createElement("img");
  image.src = img.url;
  image.classList.add("carouselTrack");
  carouselTrack.appendChild(image);
});

images.forEach((items, index) => {
  const div = document.createElement("div");
  div.classList.add("carousel-indicator", "box");
  carouselNavElement.appendChild(div);
});

const circles = Array.from(document.querySelectorAll(".carousel-indicator"));
circles[0].classList.add("active");
function changeActive(ind) {
  circles.map((item, index) => {
    if (ind === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

nextButtonElement.addEventListener("click", () => {
  if (transformValue >= images.length - 1) {
    transformValue = 0;
    changeTransform(transformValue);
    return;
  }
  transformValue++;
 changeTransform(transformValue)
});

prevButtonElement.addEventListener("click", () => {
  if (transformValue === 0) {
    return;
  }
  transformValue--;
 changeTransform(transformValue)
});

circles.forEach((item, ind) => {
  item.addEventListener("click", () => {
    transformValue = ind;
    changeTransform(transformValue);
  });
});



function startAutoPlay(){
    if(autoPlay) return

   autoPlay = setInterval(()=>{
        if (transformValue >= images.length - 1) {
            transformValue = 0;
            changeTransform(transformValue);
            return;
          }
          transformValue++;
         changeTransform(transformValue)
    },2000)
}

function stopAutoPlay(){
clearInterval(autoPlay)
autoPlay = null
}

autoplayElement.addEventListener("click",()=>{
    isAutoPlayOn = !isAutoPlayOn

    if(isAutoPlayOn){
        startAutoPlay();        
        autoplayElement.innerText = " Stop Auto Play"
        autoplayElement.style.backgroundColor = "red"
    }else{
        stopAutoPlay();
           autoplayElement.innerText = " Start Auto Play"
           autoplayElement.style.backgroundColor = "#3498db"
        return
    }
})
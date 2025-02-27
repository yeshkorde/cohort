const images = [
  "https://i.pinimg.com/736x/90/22/99/9022996abfc5630b006027756ad3ede1.jpg",
  "https://i.pinimg.com/736x/3f/81/ad/3f81ad810248f76c0f37b664260b3a85.jpg",
  "https://i.pinimg.com/736x/8f/ee/59/8fee59e4424dc7bf83f6111559b4241a.jpg",
  "https://i.pinimg.com/736x/2f/ec/9c/2fec9c5368741b615245e6b2e9cf9d3b.jpg",
  "https://i.pinimg.com/736x/fb/cb/75/fbcb752aa8e2e6d52d2c6994cb2acfc8.jpg",
  "https://i.pinimg.com/736x/65/89/a0/6589a0c99e64b8836409394bb1102902.jpg",
  "https://i.pinimg.com/736x/00/12/38/001238c60e2cbb2e5fb855320f2e076e.jpg",
  "https://i.pinimg.com/736x/ad/5a/cd/ad5acdbd9bdc7ac44b775f2b78a50f28.jpg",
  "https://i.pinimg.com/736x/6c/50/de/6c50de7c330c08aa1cdccc22b41dbace.jpg",
];

const slid = document.querySelector(".slid");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let move = 0;

images.forEach((img) => {
  let im = document.createElement("img");
  im.src = img;
  im.classList.add("h-full", "rounded-xl", "w-full", "object-cover");
  slid.appendChild(im);
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  if (move === (images.length - 1) * 100) {
    return;
  }
  move += 100;
  slid.style.transform = `translateX(-${move}%)`;
});

prev.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!move) return;
  move -= 100;
  slid.style.transform = `translateX(-${move}%)`;
});

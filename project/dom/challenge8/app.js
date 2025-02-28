let products = document.querySelectorAll(".product");
let cart_items = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");
let empty_cart = document.querySelector(".empty-cart")
let cart = [];

function renderCart() {
  cart_items.innerHTML = "";
  cart.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("productcart");
    div.innerHTML = `
      <div class="priceimage">
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
      </div>
      <div class="quantity-controls">
        <button onclick="increaseQuantity('${item.name}')">+</button>
        <h5>${item.quantity}</h5>
        <button onclick="decreaseQuantity('${item.name}')">-</button>
        <h5>$${item.price * item.quantity}</h5>
        <button onclick="removeItem('${item.name}')">Remove</button>
      </div>
    `;
    cart_items.appendChild(div);
  });
  addTotal(); 
//   setIsEmpty();
}

function addToCart(name, price, img) {
  let existingItem = cart.find((item) => item.name === name);
  if (!existingItem) {
    cart.push({
      name,
      price,
      img,
      quantity: 1,
    });
  } else {
    existingItem.quantity++;
  }
  renderCart();
}

function decreaseQuantity(name) {
  let product = cart.find((item) => item.name === name);
  if (product && product.quantity > 1) {
    product.quantity--;
    renderCart();
  }
}

function increaseQuantity(name) {
  let product = cart.find((item) => item.name === name);
  if (product) {
    product.quantity++;
    renderCart();
  }
}

function removeItem(name) {
  cart = cart.filter((item) => item.name !== name);
  renderCart();
}

function addTotal() {
 
  let data = cart.reduce((ac, cv) => ac + cv.price * cv.quantity, 0);
  let text = cartTotal.getElementsByTagName("h3")[0];
  text.innerText = `Total: $${data}`;
}

// function setIsEmpty() {
//     if (cart.length !== 0) {
//       empty_cart.style.color = "red";
//       console.log(cart);
//     } else {
//       empty_cart.style.color = "green";
//       console.log(cart);
//     }
//   }
  
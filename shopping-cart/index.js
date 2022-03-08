import products from "./dummyData/products.js";

window.onload = showProducts;
window.addToCart = addToCart;

let cart = [];

function showProducts() {
  // console.log(products);
  let html = "";
  products.map((product) => {
    // console.log(product);
    let p = JSON.stringify(product);
    html += ` <div class="product">
    <div class="product__image">
        <img src="${product.image}"
            alt="img" height="100%" width="100%" />
    </div>
    <div class="product__details">
        <p>${product.title}</p>
        <p>Rs.${product.price}/-</p>
        <button class="btnAddToCart" onclick="addToCart(${products.indexOf(
          product
        )})">Add To Cart</button>
    </div>
</div>`;
  });

  document.getElementById("productsContainer").innerHTML = html;
}

function addToCart(index) {
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
}

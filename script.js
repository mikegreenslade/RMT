alert("JavaScript is working!");
let cartCount = 0;

let cart = document.getElementById("cart");

let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cart.textContent = "🛒 Cart (" + cartCount + ")";

    });

});
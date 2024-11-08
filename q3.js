// JavaScript code for Product Card

// Selecting elements
const priceElement = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

// Getting the price value
const price = parseFloat(priceElement.innerText);

// Event listener for quantity input to update total price dynamically
quantityInput.addEventListener('input', updateTotalPrice);

// Function to update total price based on quantity
function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * price;
    totalPriceElement.innerText = totalPrice.toFixed(2); // display with 2 decimal points
}

// Function to add item to cart with confirmation alert
function addToCart() {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * price;
    alert(`You added ${quantity} items to your cart for Rs.${totalPrice.toFixed(2)}`);
}

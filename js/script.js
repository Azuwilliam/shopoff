// Fetch cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to calculate the total price of cart items
const calculateTotal = () => {
    let total = cartItems.reduce((acc, item) => acc + item.price, 0);
    document.querySelector('.total').innerText = `Total: $${total}`;
};

// Function to clear the total value displayed on the page
const clearTotal = () => {
    document.querySelector('.total').innerText = `Total: $0`; ay
};

document.querySelector('#total').addEventListener('click', function() {
    calculateTotal();
});

document.querySelector('#clear-total').addEventListener('click', function() {
    clearTotal();
});

// Ensure the total is calculated on page load
window.addEventListener('load', calculateTotal);

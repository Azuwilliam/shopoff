// Select all "Add to cart" buttons
const addToCartButtons = document.querySelectorAll("#add-btn");
// Select the cart count element
const cartCountElement = document.querySelector("#cart-count span");

// Initialize cart count
let cartCount = 0;

// Function to handle adding an item to the cart
function addToCart(event) {
  cartCount++; // Increase the cart count
  cartCountElement.textContent = cartCount; // Update the cart count on the page
}

// Add click event listeners to each "Add to cart" button
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

// Navigation links (optional functionality)
const navigationLinks = document.querySelectorAll("nav ul li a");

navigationLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

let cart = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    alert("Item Added to Cart 🛒\nTotal Items: " + cart);
  });
});
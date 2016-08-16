//in console set  bookInfo.price = 0.01 to change price in cart

var bookInfo = {
  price: "24.99",
  title: "Harry Potter Does Stuff",
  image: "/book.jpg"
}

document.getElementById("book-price").innerHTML = bookInfo.price;

var button = document.getElementById("btn");
btn.addEventListener("click", function() {
  document.getElementById("cart").className-="is-hidden";
  document.getElementById("cart-price").innerHTML = bookInfo.price;
});
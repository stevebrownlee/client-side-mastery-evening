const bookInfo = {
  price: "24.99",
  title: "Fifty Shades of Chicken",
  image: "/book.jpg"
};

const fiftyShadesBoxes = () => {
  for (let i = 250; i > 0; i = i - 5) {
    let color = "background-color: rgb(" + i + "," + i + "," + i + ")";
    const grayContainer = document.getElementById("gray-container");
    grayContainer.innerHTML += `<div class="grey-box" style="${color}"></div>`;
  }
};

const addToCartEvent = () => {
  const cartButton = document.getElementById("btn");
  cartButton.addEventListener("click", () => {
    document.getElementById("cart").className -= "is-hidden";
    document.getElementById("cart-price").innerHTML = `$${bookInfo.price}`;
  });
};


const startApplication = () => {
  fiftyShadesBoxes();
  document.getElementById("book-price").innerHTML = `$${bookInfo.price}`;
  addToCartEvent();
};

startApplication();

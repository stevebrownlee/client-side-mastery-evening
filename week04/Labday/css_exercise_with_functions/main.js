var allProducts = [];

var product1 = {
  name: "Mop Attire",
  imagePath: "./images/mopAttire.jpg",
  imageAlt: "Product: Mop Attire",
  description: "This is a really good description of our product. It really sells it. It;s the best.",
  price: 3000,
  soldOut: false
};

var product2 = {
  name: "Taco Suit",
  imagePath: "./images/tacoSuit.jpg",
  imageAlt: "Product: Taco Suit",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 25,
  soldOut: false
};

var product3 = {
  name: "Neck Decoration",
  imagePath: "./images/neckDecoration.jpg",
  imageAlt: "Product: Neck Decoration",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 750,
  soldOut: false
};

var product4 = {
  name: "Head Ornament",
  imagePath: "./images/headOrnament.jpg",
  imageAlt: "Product: Head Ornament",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 3.22,
  soldOut: true
};

var product5 = {
  name: "Boob Hat",
  imagePath: "./images/boobHat.jpg",
  imageAlt: "Product: Boob Hat",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 36,
  soldOut: true
};

var product6 = {
  name: "Not Boob Hat",
  imagePath: "./images/boobHat.jpg",
  imageAlt: "Product: Boob Hat",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 36,
  soldOut: true
};

allProducts.push(product1);
allProducts.push(product2);
allProducts.push(product3);
allProducts.push(product4);
allProducts.push(product5);
allProducts.push(product6);


var productContainer = document.getElementById("product-container");



function buildDomString(product){
  var domString = "";

  domString +=      '<section class="product">';
  domString +=      '<div class="title">';
  domString +=         '<h2>' + product.name + '</h2>';
  domString +=      '</div>';
  domString +=      '<div class="image">';
  domString +=        '<img src="'+ product.imagePath +'" alt="' + product.imageAlt + '">';
  domString +=      '</div>';
  domString +=      '<div class="description">';
  domString +=        '<p>' +  product.description +'</p>';
  domString +=          '<h6>$' + product.price +'</h6>';
  domString +=      '</div>';
  if (product.soldOut) {
    domString += '<div class="sold-out">';
    domString +=  '<img src="./images/soldOut.png" alt="Sold Out">';
    domString +=  '</div>';
  }
  domString +=      '</section>';
  return domString;
}

function printProductArrayToDom(productArray){
  for (var i = 0; i < productArray.length; i++) {

    var currentProduct = productArray[i];
    var productDomString = buildDomString(currentProduct);
    productContainer.innerHTML += productDomString;
  }
}

printProductArrayToDom(allProducts);

















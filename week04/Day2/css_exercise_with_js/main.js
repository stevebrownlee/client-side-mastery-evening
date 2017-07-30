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

allProducts.push(product1);
allProducts.push(product2);
allProducts.push(product3);
allProducts.push(product4);
allProducts.push(product5);


var productContainer = document.getElementById("product-container");

for (var i = 0; i < allProducts.length; i++) {

	var currentProduct = allProducts[i];

	var domString = "";


	domString +=      '<section class="product">';
    domString +=    	'<div class="title">';
    domString +=    	   '<h2>' + currentProduct.name + '</h2>';
    domString +=    	'</div>';
    domString +=    	'<div class="image">';
    domString +=    	  '<img src="'+ currentProduct.imagePath +'" alt="' + currentProduct.imageAlt + '">';
    domString +=    	'</div>';
    domString +=    	'<div class="description">';
    domString +=    		'<p>' +  currentProduct.description +'</p>';
    domString +=    	    '<h6>$' + currentProduct.price +'</h6>';
    domString +=    	'</div>';
    domString +=      '</section>';

    productContainer.innerHTML += domString;
}











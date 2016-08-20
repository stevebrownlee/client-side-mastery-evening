var Sedan = (function(originalSedan) {
  var greeting = "Hello, Happy Car Buyers";

  originalSedan.sayHello = function () {
    return greeting;
  };

  return originalSedan;
}(Sedan));

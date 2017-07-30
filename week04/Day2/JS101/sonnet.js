var sonnetString = document.getElementById("sonnet").innerHTML;

console.log("index of 'orphans'", sonnetString.indexOf("orphans"));
console.log("length of sonnet", sonnetString.length);

sonnetString = sonnetString.replace("winter", "yuletide");
sonnetString = sonnetString.replace(/ the /gi, " a large ");

document.getElementById("sonnet").innerHTML = sonnetString;

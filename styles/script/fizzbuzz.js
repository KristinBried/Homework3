console.log('Hello there!');

function main() {
  console.log("Running Main");
  addListeners();
}

var startingValue = document.getElementById("name-starting-value");
var endingValue = document.getElementById("name-ending-value");
var fizzValue = document.getElementById("name-fizz-value");
var buzzValue = document.getElementById("name-buzz-value");
const generateList = document.getElementById("generate-btn");
const clearList = document.getElementById("clear-btn");
const listOfCreatedNum = document.getElementById("number-list");

var x = startingValue.value;
console.log("Default mainīgais ir " + x);

var y = endingValue.value;
console.log("Default mainīgais ir " + y);

var z = fizzValue.value;
console.log("Default mainīgais ir " + z);

var v = buzzValue.value;
console.log("Default mainīgais ir " + v);

function createDivs() {
  clearAll();
  var x = startingValue.value;
  var y = endingValue.value;
  var z = fizzValue.value;
  var v = buzzValue.value;
  console.log("Function createDivs is ON");
    while (x <= y) {
    var divs = document.createElement("div"); 
      if ((x % z === 0)&& (x % v !== 0)) {
      divs.className = "fizz-class";
      var numberList = document.createTextNode("FIZZ")
      } else if ((x % v === 0) && (x % z !== 0)) {
        divs.className = "buzz-class";
        var numberList = document.createTextNode("BUZZ")}
      else if ((x % z === 0) && (x % v === 0)) {
        divs.className = "fizz-buzz-class";
        var numberList = document.createTextNode("FIZZ BUZZ")
      } else {
        divs.className = "simple-class";
        var numberList = document.createTextNode(x) 
        };
    divs.appendChild(numberList);
    document.getElementById("number-list").appendChild(divs);
    x++;
}   
}

function clearAll() {
  console.log("Clear all number list!");
  while (listOfCreatedNum.firstChild) {
    listOfCreatedNum.removeChild(listOfCreatedNum.firstChild);
  }
}

function addListeners() {
  console.log("Adding listeners");
  generateList.addEventListener("click", createDivs);
  clearList.addEventListener("click", clearAll);
}


main();
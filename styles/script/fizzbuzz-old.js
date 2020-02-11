console.log("Hello!")

//Funkcija zemāk nolasa ievadītās vērtības, lai ģenerētu FizzBuzz pēc jaunām vērtībām

function getStartingNumber() {
    var startingValue = document.getElementById("name-starting-value").value;
    console.log(startingValue);
    if (startingValue <= 0) {
    document.getElementById("starting-number-alert").innerHTML = "Vērtībai ir jābūt lielākai par 0!";
    }
    if (startingValue >= 101) {
    document.getElementById("starting-number-alert").innerHTML = "Vērtībai ir jābūt mazākai par 101!";
    }
    if ((startingValue > 0) && (startingValue < 101)) {
      document.getElementById("starting-number-alert").innerHTML = "  ";
    }
  }

function getEndingNumber() {
    var endingValue = document.getElementById("name-ending-value").value;
    console.log(endingValue);
    if (endingValue <= 0) {
      document.getElementById("ending-number-alert").innerHTML = "Vērtībai ir jābūt lielākai par 0!";
    }
    if (endingValue >= 101) {
      document.getElementById("ending-number-alert").innerHTML = "Vērtībai ir jābūt mazākai par 101!";
    }
    if ((endingValue > 0) && (endingValue < 101)) {
      document.getElementById("ending-number-alert").innerHTML = "  ";
    }
  }

  function getFizzNumber() {
    var fizzValue = document.getElementById("name-fizz-value").value;
    console.log(fizzValue);
    if (fizzValue <= 0) {
      document.getElementById("fizz-number-alert").innerHTML = "Vērtībai ir jābūt lielākai par 0!";
    }
    if (fizzValue >= 101) {
      document.getElementById("fizz-number-alert").innerHTML = "Vērtībai ir jābūt mazākai par 101!";
    }
    if ((fizzValue > 0) && (fizzValue < 101)) {
      document.getElementById("fizz-number-alert").innerHTML = "  ";
    }
  }

  function getBuzzNumber() {
    var buzzValue = document.getElementById("name-buzz-value").value;
    console.log(buzzValue);
    if (buzzValue <= 0) {
      document.getElementById("buzz-number-alert").innerHTML = "Vērtībai ir jābūt lielākai par 0!";
    }
    if (buzzValue >= 101) {
      document.getElementById("buzz-number-alert").innerHTML = "Vērtībai ir jābūt mazākai par 101!";
    }
    if ((buzzValue > 0) && (buzzValue < 101)) {
      document.getElementById("buzz-number-alert").innerHTML = "  ";
    }
  }



var i = 1;
function createDivs () {
  while (i <= 100) {
    var divs = document.createElement("div"); 
    var numberList = document.createTextNode(i); 
    divs.appendChild(numberList);  
    document.getElementById("number-list").appendChild(divs);
    i++;
}
}





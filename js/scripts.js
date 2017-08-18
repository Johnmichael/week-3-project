// BACK END LOGIC

const ping = 3;
const pong = 5;
const pingPong = (ping * pong);
var pingPongCalc = function(number) {
  var inputArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % pingPong == 0) {
      inputArray.push("Ping-Pong!");
    } else if (i % pong == 0) {
      inputArray.push("Pong!");
    } else if (i % ping == 0) {
      inputArray.push("Ping!");
    } else {
      inputArray.push(i);
    }
  }
  return inputArray;
};

// FRONT END LOGIC

$(document).ready(function() {
  $("form").submit(function(event) {
    $("ul").empty();
    var number = ($("input#userInput").val());
    var outputArray = pingPongCalc(number);
    if (number == 420) {
      alert("...");
    };
    for (var i = 0; i < outputArray.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = outputArray[i];
      var numberList = document.getElementById("list");
      numberList.appendChild(listItem);
    }
    event.preventDefault();
  });
});

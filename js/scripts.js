
// BACK END LOGIC

const ping = 3;
const pong = 5;
const pingPong = 15;

var inputNumbers = [];
// const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// for (let i = 0; i < movies.length; i++) {
// console.log(movies[i]);
// }



// var outputArray = map.inputArray();


// var allowedUserInput = /[0-9]/

// FRONT END LOGIC

$(document).ready(function() {
  $("form").submit(function(event) {
    var number = $("input#userInput").val();
    function pingPongCheck() {
      var bounce ="";
      if (number % ping == 0) {
        bounce = "ping"
      };
      if (number % pong== 0) {
        bounce = "pong"
      };
      if (number % pingPong == 0) {
        bounce = "ping-pong"
      };
      if (number % ping !=0 && number % pong != 0) {
        bounce = number
      };
      return bounce;
      inputNumbers.push(bounce);
    };
    $(".output").text(pingPongCheck);
    event.preventDefault();




  });
});




// Create for loop
// var arrayMaker = function(num) {
// 	var myArray = [];
// 	for(var i = number; i <= num; i++){
//   	// myArray.push(i);
//     console.log(i);
//   }
//   return myArray;
// };

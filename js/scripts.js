
// BACK END LOGIC

const ping = 3;
const pong = 5;
const pingpong = 15;


// var allowedUserInput = /[0-9]/

// FRONT END LOGIC

$(document).ready(function() {
  $("form").submit(function(event) {
    var number = $("input#userInput").val();
    function pingpongcheck() {
      var bounce ="";
      if (number % ping == 0) {
        bounce = "ping"
      };
      if (number % pong== 0) {
        bounce = "pong"
      };
      if (number % pingpong == 0) {
        bounce = "ping-pong"
      };

      return bounce;
    };
    $(".output").text(pingpongcheck);
    event.preventDefault();


  });
});




// Create for loop

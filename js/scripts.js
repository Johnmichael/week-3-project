
// BACK END LOGIC



// FRONT END LOGIC

function empty() {
    var x;
    x = document.getElementById("userInput").value;
    if (x <= 0 || x >= 4000) {
        alert("Please enter a number.");
        return false;
    };
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var red = $("input#userInput").val();
    $(".output").append(convert(red));
    event.preventDefault();


  });
});

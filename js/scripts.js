$(document).ready(function(){
  $("#palindromes-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#palindromes-input").val();
    var userArray = userInput.split("");
    var arrayReverse = userArray.slice(); // need to use slice() to clone array
    arrayReverse.reverse();
    if(userArray.toString() === arrayReverse.toString()){
      $("#userOutput").text("Yes, it is a palindromes!");
    } else {
      $("#userOutput").text("No, it is not a palindromes!")
    }


  });
});

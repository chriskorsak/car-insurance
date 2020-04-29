$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("#age").val());
    var gender = $("#gender").val();

    // and operator is &&, or operator is ||
    if (age >= 16) {
      var quote = (100 - age) * 3;
      if (gender === "male" || age < 26) {
        quote += 50;
      }

      $("#rate").text(quote);
      $("#quote").show();

    } else
      alert("You arent' old enough to drive!")
    
    event.preventDefault();
  });
    
});
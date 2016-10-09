var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
    var inputNumber = parseInt($("input").val());
    var simpleCalculator = new Calculator("hot pink");
    var outputs = simpleCalculator.pingPong(inputNumber);
    $("#result").empty();
    for (var i = 0; i < outputs.length; i++) {
      $("#result").append("<li>" + outputs[i] + "</li>");
      }
    $("#result").slideDown();
  });
});

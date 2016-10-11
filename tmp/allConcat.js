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

$(document).ready(function(){
  $('#time').text(moment());
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#result').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var humidity = currentWeatherObject.getWeather(city);
    $('.showWeather').text("The humidity in " + city + " is " + humidity + "%");
    console.log(humidity);
  });
});

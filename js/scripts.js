//BUSINESS LOGIC
var outputs = [];
function pingPong(number) {
  outputs = [];
  for (var i = 1; i <= number; i++) {
    if(i%15 === 0) {
      outputs.push("ping-pong");
    } else if(i%3 === 0) {
      outputs.push("ping");
    } else if(i%5 === 0) {
      outputs.push("pong");
    } else {
      outputs.push(i);
    }
  };
  return outputs;
};
//USER INTERFACE LOGIC
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
    var inputNumber = parseInt($("input").val());
    function pingPongList() {
    pingPong(inputNumber);
    $("#result").empty();
    for (var i = 0; i < outputs.length; i++) {
      $("#result").append("<li>" + outputs[i] + "</li>");
      };
    $("#result").slideDown();
    };
    pingPongList();
  });
});

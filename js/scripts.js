//BUSINESS LOGIC
function pingPong(number) {
  var outputs = [];
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
 var inputNumber = parseInt($("input").val());
 // if(isNaN(inputNumber)) {
 //   $("#warning").show;
 // } else {
 //   pingPong(inputNumber).slidedown;
 // }
 alert(inputNumber);
 console.log(pingPong(inputNumber));
  });
});

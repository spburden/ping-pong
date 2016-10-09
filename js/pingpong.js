function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(number) {
  var outputs = [];
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      outputs.push("ping-pong");
    } else if (i % 3 === 0) {
      outputs.push("ping");
    } else if (i % 5 === 0) {
      outputs.push("pong");
    } else {
      outputs.push(i);
    }
  }
  return outputs;
};

exports.calculatorModule = Calculator;

//BUSINESS LOGIC
function pingPong(number){
  var outputs = [];
  for (var i = 1; i <= number; i++){
    if(i%3 === 0){
      outputs.push("ping");

    }
  }

}

//USER INTERFACE LOGIC
$(function(){
 $("form").submit(function(event){
 event.preventDefault();
 var inputNumber = parseInt($("input").val());
 // if(isNaN(inputNumber)){
 //   $("#warning").show;
 // }else{
 //   pingPong(inputNumber).slidedown;
 // }
 alert(inputNumber);
  });
});

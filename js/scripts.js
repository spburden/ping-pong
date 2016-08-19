//BUSINESS LOGIC


//USER INTERFACE LOGIC
$(function() {
 $("form").submit(function(event) {
 event.preventDefault();
 var inputNumber = parseInt($("input").val());
 // if(isNaN(inputNumber)){
 //   $("#warning").show;
 // } else {
 //   pingPong(inputNumber).slidedown;
 // }
 alert(inputNumber);
  });
});

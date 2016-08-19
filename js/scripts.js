//BUSINESS LOGIC


//USER INTERFACE LOGIC
$(function() {
 $("form").submit(function(event) {
 event.preventDefault();
 var inputNumber = parseInt($("input").val());
 alert(inputNumber);
  });
});

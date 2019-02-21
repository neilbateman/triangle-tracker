$(document).ready(function() {
    $("form#length1").submit(function(event) {
    alert("hello")
    alert("Equliateral triangle")
    var input1 = parseInt($("input#length-input1").val());
    var input2 = parseInt($("input#length-input2").val());
    var input3 = parseInt($("input#length-input3").val());
    if (input1 === input2) {

    }
event.preventDefault();
  });
});

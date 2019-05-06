$(document).ready(function(){
  $("#one").click(function(){
    $(".showing1").toggle();
  });



  $("button").click(function(event){
    event.preventDefault();
    var user = document.getElementById('input1').value;
    alert(user + " we have received your message. Thank you for reaching out to us.");
  });
});

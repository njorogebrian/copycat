$(document).ready(function() {
  $("#one").click(function() {
    $(".showing1").toggle();
  });
  $("#two").click(function() {
    $(".showing2").toggle();
  });
  $("#three").click(function() {
    $(".showing3").toggle();
  });


  $("button").click(function(event) {
    event.preventDefault();
    var user = document.getElementById('input1').value;
    alert(user + " we have received your message. Thank you for reaching out to us.");
  });
  $(".para").hover(function() {
      $(this).animate({
        opacity: "1"
      });
    },
    function() {
      $this.animate({
        opacity: 0
      });
    });
});

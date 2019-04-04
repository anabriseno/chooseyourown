$(document).ready(function() {
  /////Decision 1 Page
  $("form#decision-form").submit(function(event) {
    event.preventDefault();
    var decision1 = $("#option1").val();

    if (decision1 === "1") {
      $("#decision-2a").fadeIn().delay(1000);
      $("#decision1").hide();

    } else if (decision1 === "2") {
      $("#decision-2b").fadeIn().delay(1000);
      $("#decision1").hide();
    } else if (decision3 === "3") {
      $("#decision-2c").fadeIn().delay(1000);
      $("#decision1").hide();
    }

event.preventDefault();

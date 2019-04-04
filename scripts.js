function myFunction() {
  var x = document.getElementById("option1").selectedIndex;
  var value = document.getElementsByTagName("option")[x].value
  // alert(document.getElementsByTagName("option")[x].value);
  if (value === "1") {
    //$("#option2").empty().append(option2);
    $("#decision-2c").show();
  }
  if (value === "2"){
    $("#decision-3a").show();
  }

  if (value === "3"){
    $("#decision-3b").show();

  }

}

//$(document).ready(function() {
  /////Decision 1 Page
  //$("form#decision-form").submit(function(event) {
    //event.preventDefault();
    //var decision1 = $("#option1").val();

    //if (decision1 === "1") {
      //$("#decision-2a").fadeIn().delay(1000);
      //$("#decision1").hide();

    //} else if (decision1 === "2") {
      //$("#decision-2b").fadeIn().delay(1000);
      //$("#decision1").hide();
    //} else if (decision3 === "3") {
      //$("#decision-2c").fadeIn().delay(1000);
      //$("#decision1").hide();
   // }

//event.preventDefault();

$(document).ready(function () {
   $("#sh1").hide();
   $("#sh2").hide();
   $("#sh3").hide();
   $("#sh4").hide();

   var College_count1 = -1;
   var College_count2 = -1;
   var College_count3 = -1;
   var College_count4 = -1;

   var $checkDisplay;

   $("#college1").click(function () {
      $checkDisplay = $("#sh1").css("display");
      if($checkDisplay == "none"){
         $("#sh1").show();
         $(this).css("border","1px solid #ae1e4c");
      } else {
         $("#sh1").hide();
         $(this).css("border","");
      }
   });

   $("#college2").click(function () {
      $checkDisplay = $("#sh2").css("display");
      if($checkDisplay == "none"){
         $("#sh2").show();
         $(this).css("border","1px solid #ae1e4c");
      } else {
         $("#sh2").hide();
         $(this).css("border","");
      }
   });

   $("#college3").click(function () {
      $checkDisplay = $("#sh3").css("display");
      if($checkDisplay == "none"){
         $("#sh3").show();
         $(this).css("border","1px solid #ae1e4c");
      } else {
         $("#sh3").hide();
         $(this).css("border","");
      }
   });

   $("#college4").click(function () {
      $checkDisplay = $("#sh4").css("display");
      if($checkDisplay == "none"){
         $("#sh4").show();
         $(this).css("border","1px solid #ae1e4c");
      } else {
         $("#sh4").hide();
         $(this).css("border","");
      }
   });

});
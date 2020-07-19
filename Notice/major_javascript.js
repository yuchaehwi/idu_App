// JavaScript Document

$(document).ready(function(e) {
	
	// *** 메인페이지 학부 선택 *** 
	// 1:공학부, 2:디자인예술학부, 3:어문사회학부
	// Default 설정
	$("#List1").hide();
	$("#List2").hide();	
	$("#List3").hide();
	
	// 학부 클릭 시 리스트 출력
	$("#college1").click(function () {
		$("#List1").toggle();
		$("#List2").hide();
      $("#List3").hide();
	});
	$("#college2").click(function () {
		$("#List1").hide();
		$("#List2").toggle();
      $("#List3").hide();
	});
	$("#college3").click(function () {
		$("#List1").hide();
		$("#List2").hide();
		$("#List3").toggle();
	});
	
	
	// *** 학과 소개 (공통) ***
	// 1:학과안내, 2:교육과정, 3:교수소개
	// Default 설정
   // $("#Info1_Text").hide();
	$("#Info2_Text").hide();
	$("#Info3_Text").hide();
	
	// Info 클릭 시 내용 출력
	$("#Info1").click(function () {
		$("#Info1_Text").show();
		$("#Info2_Text").hide();
      $("#Info3_Text").hide();
      $("#Info1").addClass("li_hak_click");
      $("#Info2").removeClass("li_hak_click");
      $("#Info3").removeClass("li_hak_click");
	});
	$("#Info2").click(function () {
		$("#Info1_Text").hide();
		$("#Info2_Text").show();
      $("#Info3_Text").hide();
      $("#Info2").addClass("li_hak_click");
      $("#Info1").removeClass("li_hak_click");
      $("#Info3").removeClass("li_hak_click");
	});
	$("#Info3").click(function () {
		$("#Info1_Text").hide();
		$("#Info2_Text").hide();
      $("#Info3_Text").show();
      $("#Info3").addClass("li_hak_click");
      $("#Info1").removeClass("li_hak_click");
      $("#Info2").removeClass("li_hak_click");
	});
	
	// *** 학과별 교수님 소개 ***
	// Default 설정
	$("#Professor1_Text").hide();
	$("#Professor2_Text").hide();
	$("#Professor3_Text").hide();
	$("#Professor4_Text").hide();
	$("#Professor5_Text").hide();
	$("#Professor6_Text").hide();
	$("#Professor7_Text").hide();
	$("#Professor8_Text").hide();
	$("#Professor9_Text").hide();
	$("#Professor10_Text").hide();
	$("#Professor11_Text").hide();
	$("#Professor12_Text").hide();
	$("#Professor13_Text").hide();
	$("#Professor14_Text").hide();
	$("#Professor15_Text").hide();
	
	// 교수님 이름 클릭 시 내용 출력
	$("#Professor1").click(function () {
		$("#Professor1_Text").toggle();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor2").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").toggle();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor3").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").toggle();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor4").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").toggle();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor5").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").toggle();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor6").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").toggle();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor7").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").toggle();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor8").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").toggle();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor9").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").toggle();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor10").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").toggle();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor11").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").toggle();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor12").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").toggle();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor13").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").toggle();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").hide();
	});
	$("#Professor14").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").toggle();
		$("#Professor15_Text").hide();
	});
	$("#Professor15").click(function () {
		$("#Professor1_Text").hide();
		$("#Professor2_Text").hide();
		$("#Professor3_Text").hide();
		$("#Professor4_Text").hide();
		$("#Professor5_Text").hide();
		$("#Professor6_Text").hide();
		$("#Professor7_Text").hide();
		$("#Professor8_Text").hide();
		$("#Professor9_Text").hide();
		$("#Professor10_Text").hide();
		$("#Professor11_Text").hide();
		$("#Professor12_Text").hide();
		$("#Professor13_Text").hide();
		$("#Professor14_Text").hide();
		$("#Professor15_Text").toggle();
	});
		
	
	
});
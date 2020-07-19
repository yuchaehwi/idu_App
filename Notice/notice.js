
$(function(){
   var $notice = [
      {num:"1",content:"⊙ 2020-1학기 기말시험 안내"},
      {num:"2",content:"⊙ [학사] [필독]2020-1학기 9주차 이후 제한적 대면수업 진행관련 긴급공지"},
      {num:"3",content:"⊙ [기타] [교무학적팀]교내 휴무일(4.30-5.5)에 따른 학생증명발급 안내"},
      {num:"4",content:"⊙ [학사] 2020-1학기 제한적 대면수업 이후 등교중지 및 출석인정 안내"},
      {num:"5",content:"⊙ 2020학년도 1학기 등록금 분할납부[4회차] 안내"},
      {num:"6",content:"⊙ [학사] 코로나 19에 따른 제한적 대면수업 운영 안내"},
      {num:"7",content:"⊙ [학사] [필독]2020-1학기 조기취업자 출석인정 유의사항 안내"},
      {num:"8",content:"⊙ [학사] [필독]2020-1학기 중간고사 미실시 및 성적평가, 추후 학사일정 안내"}
   ];

   $.each($notice,function($index,$no){
      $("#notice").append("<li></li>");
      $("#notice>li").eq($index).text($no.content);
   });

   $("#notice>li").click(function(){
      $("#noticeContent").show();
      var $index = $(this).index() + 1;
      var $noticeName = "./img/notice" + $index + ".png";
      $("#noticeContent").css("background-image","url('" + $noticeName + "')");
   });
});
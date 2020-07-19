var holidays = {
	"0101":{type:0, title:"신정", year:""},
	"0301":{type:0, title:"삼일절", year:""},
	"0505":{type:0, title:"어린이날", year:""},
	"0606":{type:0, title:"현충일", year:""},
	"0815":{type:0, title:"광복절", year:""},
	"1003":{type:0, title:"개천절", year:""},
	"1009":{type:0, title:"한글날", year:""},
	"1225":{type:0, title:"크리스마스", year:""},
	
    "0914":{type:0, title:"추석연휴", year:"2016"},
    "0915":{type:0, title:"추석", year:"2016"},
	"0916":{type:0, title:"추석연휴", year:"2016"},
	
	"0215":{type:1, title:"복학신청", year:"2016"},
	"0216":{type:1, title:"복학신청", year:"2016"},
	"0217":{type:1, title:"복학신청", year:"2016"},
	"0218":{type:1, title:"복학신청", year:"2016"},
	"0219":{type:1, title:"복학신청", year:"2016"},
	"0215":{type:1, title:"재학생등록", year:"2016"},
	"0216":{type:1, title:"재학생등록", year:"2016"},
	"0217":{type:1, title:"재학생등록", year:"2016"},
	"0218":{type:1, title:"재학생등록", year:"2016"},
	"0219":{type:1, title:"재학생등록", year:"2016"},
	"0220":{type:3, title:"재학생등록", year:"2016"},
	"0221":{type:2, title:"재학생등록", year:"2016"},
	"0222":{type:1, title:"재학생등록", year:"2016"},
	"0223":{type:1, title:"재학생등록", year:"2016"},
	"0224":{type:1, title:"재학생등록", year:"2016"},
	"0222":{type:1, title:"수강신청", year:"2016"},
	"0223":{type:1, title:"수강신청", year:"2016"},
	"0224":{type:1, title:"수강신청", year:"2016"},
	"0223":{type:1, title:"제44화 입학식 및 신입생오리엔테이션", year:"2016"},
	"0131":{type:2, title:"강의계획서 입력", year:"2016"},
	"0201":{type:1, title:"강의계획서 입력", year:"2016"},
	"0202":{type:1, title:"강의계획서 입력", year:"2016"},
	"0203":{type:1, title:"강의계획서 입력", year:"2016"},
		
	"0301":{type:1, title:"1학기 개강", year:"2016"},
	"0302":{type:1, title:"IDU 수련회", year:"2016"},
	"0303":{type:1, title:"IDU 수련회", year:"2016"},
	"0304":{type:1, title:"IDU 수련회", year:"2016"},
	"0305":{type:3, title:"IDU 수련회", year:"2016"},
	"0306":{type:2, title:"IDU 수련회", year:"2016"},
	"0307":{type:1, title:"IDU 수련회", year:"2016"},
	"0308":{type:1, title:"IDU 수련회", year:"2016"},
	"0309":{type:1, title:"IDU 수련회", year:"2016"},
	"0310":{type:1, title:"IDU 수련회", year:"2016"},
	"0311":{type:1, title:"IDU 수련회", year:"2016"},
	"0312":{type:3, title:"IDU 수련회", year:"2016"},
	"0313":{type:2, title:"IDU 수련회", year:"2016"},
	"0314":{type:1, title:"IDU 수련회", year:"2016"},
	"0315":{type:1, title:"IDU 수련회", year:"2016"},
	"0316":{type:1, title:"IDU 수련회", year:"2016"},
	"0317":{type:1, title:"IDU 수련회", year:"2016"},
	"0318":{type:1, title:"IDU 수련회", year:"2016"},
	"0319":{type:3, title:"IDU 수련회", year:"2016"},
	"0320":{type:2, title:"IDU 수련회", year:"2016"},
	"0321":{type:1, title:"IDU 수련회", year:"2016"},
	"0322":{type:1, title:"IDU 수련회", year:"2016"},
	"0323":{type:1, title:"IDU 수련회", year:"2016"},
	"0324":{type:1, title:"IDU 수련회", year:"2016"},
	"0325":{type:1, title:"IDU 수련회", year:"2016"},
	"0326":{type:3, title:"IDU 수련회", year:"2016"},
	"0327":{type:2, title:"IDU 수련회", year:"2016"},
	"0328":{type:1, title:"IDU 수련회", year:"2016"},
	"0329":{type:1, title:"IDU 수련회", year:"2016"},
	"0330":{type:1, title:"IDU 수련회", year:"2016"},
	"0331":{type:1, title:"IDU 수련회", year:"2016"},
	"0308":{type:1, title:"신입생 환영예배", year:"2016"},
	
	"0401":{type:1, title:"IDU 수련회", year:"2016"},
	"0402":{type:3, title:"IDU 수련회", year:"2016"},
	"0403":{type:2, title:"IDU 수련회", year:"2016"},
	"0404":{type:1, title:"IDU 수련회", year:"2016"},
	"0405":{type:1, title:"IDU 수련회", year:"2016"},
	"0406":{type:1, title:"IDU 수련회", year:"2016"},
	"0407":{type:1, title:"IDU 수련회", year:"2016"},
	"0408":{type:1, title:"IDU 수련회", year:"2016"},
	"0420":{type:1, title:"중간고사", year:"2016"},
	"0421":{type:1, title:"중간고사", year:"2016"},
	"0422":{type:1, title:"중간고사", year:"2016"},
	"0423":{type:3, title:"중간고사", year:"2016"},
	"0424":{type:2, title:"중간고사", year:"2016"},
	"0425":{type:1, title:"중간고사", year:"2016"},
	"0426":{type:1, title:"중간고사", year:"2016"},
	
	"0511":{type:1, title:"체육대회", year:"2016"},
	"0512":{type:1, title:"체육대회", year:"2016"},
	"0513":{type:1, title:"체육대회", year:"2016"},

	"0608":{type:1, title:"보강주간", year:"2016"},
	"0609":{type:1, title:"보강주간", year:"2016"},
	"0610":{type:1, title:"보강주간", year:"2016"},
	"0611":{type:3, title:"보강주간", year:"2016"},
	"0612":{type:2, title:"보강주간", year:"2016"},
	"0613":{type:1, title:"보강주간", year:"2016"},
	"0614":{type:1, title:"보강주간", year:"2016"},
	"0615":{type:1, title:"기말시험", year:"2016"},
	"0616":{type:1, title:"기말시험", year:"2016"},
	"0617":{type:1, title:"기말시험", year:"2016"},
	"0618":{type:3, title:"기말시험", year:"2016"},
	"0619":{type:2, title:"기말시험", year:"2016"},
	"0620":{type:1, title:"기말시험", year:"2016"},
	"0621":{type:1, title:"기말시험", year:"2016"},
	"0615":{type:1, title:"성적입력", year:"2016"},
	"0616":{type:1, title:"성적입력", year:"2016"},
	"0617":{type:1, title:"성적입력", year:"2016"},
	"0618":{type:1, title:"성적입력", year:"2016"},
	"0619":{type:1, title:"성적입력", year:"2016"},
	"0620":{type:1, title:"성적입력", year:"2016"},
	"0621":{type:1, title:"성적입력", year:"2016"},
	"0622":{type:1, title:"성적입력", year:"2016"},
	"0623":{type:1, title:"성적입력", year:"2016"},
	"0624":{type:1, title:"성적입력", year:"2016"},
	"0622":{type:1, title:"하계현장실습", year:"2016"},
	"0623":{type:1, title:"하계현장실습", year:"2016"},
	"0624":{type:1, title:"하계현장실습", year:"2016"},
	"0625":{type:3, title:"하계현장실습", year:"2016"},
	"0626":{type:2, title:"하계현장실습", year:"2016"},
	"0627":{type:1, title:"하계현장실습", year:"2016"},
	"0628":{type:1, title:"하계현장실습", year:"2016"},
	"0629":{type:1, title:"하계현장실습", year:"2016"},
	"0630":{type:1, title:"강의평가,성적열람 및 정정", year:"2016"},
	"0627":{type:1, title:"강의평가,성적열람 및 정정", year:"2016"},
	"0628":{type:1, title:"강의평가,성적열람 및 정정", year:"2016"},
	"0629":{type:1, title:"강의평가,성적열람 및 정정", year:"2016"},
	
	"0701":{type:1, title:"하계현장실습", year:"2016"},
	"0702":{type:3, title:"하계현장실습", year:"2016"},
	"0703":{type:2, title:"하계현장실습", year:"2016"},
	"0704":{type:1, title:"하계현장실습", year:"2016"},
	"0705":{type:1, title:"하계현장실습", year:"2016"},
	"0706":{type:1, title:"하계현장실습", year:"2016"},
	"0707":{type:1, title:"하계현장실습", year:"2016"},
	"0708":{type:1, title:"하계현장실습", year:"2016"},
	"0709":{type:3, title:"하계현장실습", year:"2016"},
	"0710":{type:2, title:"하계현장실습", year:"2016"},
	"0711":{type:1, title:"하계현장실습", year:"2016"},
	"0712":{type:1, title:"하계현장실습", year:"2016"},
	"0713":{type:1, title:"하계현장실습", year:"2016"},
	"0714":{type:1, title:"하계현장실습", year:"2016"},
	"0715":{type:1, title:"하계현장실습", year:"2016"},
	"0716":{type:3, title:"하계현장실습", year:"2016"},
	"0717":{type:2, title:"하계현장실습", year:"2016"},
	"0718":{type:1, title:"하계현장실습", year:"2016"},
	"0719":{type:1, title:"하계현장실습", year:"2016"},
	"0720":{type:1, title:"하계현장실습", year:"2016"},
	"0721":{type:1, title:"하계현장실습", year:"2016"},
	"0722":{type:1, title:"하계현장실습", year:"2016"},
	"0723":{type:3, title:"하계현장실습", year:"2016"},
	"0724":{type:2, title:"하계현장실습", year:"2016"},
	"0725":{type:1, title:"하계현장실습", year:"2016"},
	"0726":{type:1, title:"하계현장실습", year:"2016"},
	"0727":{type:1, title:"하계현장실습", year:"2016"},
	"0728":{type:1, title:"하계현장실습", year:"2016"},
	"0729":{type:1, title:"하계현장실습", year:"2016"},
	"0730":{type:3, title:"하계현장실습", year:"2016"},
	"0731":{type:2, title:"하계현장실습", year:"2016"},
	
	"0801":{type:1, title:"하계현장실습", year:"2016"},
	"0802":{type:1, title:"하계현장실습", year:"2016"},
	"0803":{type:1, title:"하계현장실습", year:"2016"},
	"0804":{type:1, title:"하계현장실습", year:"2016"},
	"0805":{type:1, title:"하계현장실습", year:"2016"},
	"0806":{type:3, title:"하계현장실습", year:"2016"},
	"0807":{type:2, title:"하계현장실습", year:"2016"},
	"0808":{type:1, title:"하계현장실습", year:"2016"},
	"0809":{type:1, title:"하계현장실습", year:"2016"},
	"0810":{type:1, title:"하계현장실습", year:"2016"},
	"0811":{type:1, title:"하계현장실습", year:"2016"},
	"0812":{type:1, title:"하계현장실습", year:"2016"},
	"0813":{type:3, title:"하계현장실습", year:"2016"},
	"0814":{type:2, title:"하계현장실습", year:"2016"},
	"0815":{type:1, title:"하계현장실습", year:"2016"},
	"0816":{type:1, title:"하계현장실습", year:"2016"},
	"0817":{type:1, title:"하계현장실습", year:"2016"},
	"0818":{type:1, title:"하계현장실습", year:"2016"},
	"0819":{type:1, title:"하계현장실습", year:"2016"},
	"0820":{type:3, title:"하계현장실습", year:"2016"},
	"0821":{type:2, title:"하계현장실습", year:"2016"},
	"0822":{type:1, title:"하계현장실습", year:"2016"},
	"0823":{type:1, title:"하계현장실습", year:"2016"},
	"0824":{type:1, title:"하계현장실습", year:"2016"},
	"0825":{type:1, title:"하계현장실습", year:"2016"},
	"0826":{type:1, title:"하계현장실습", year:"2016"},
	"0827":{type:3, title:"하계현장실습", year:"2016"},
	"0828":{type:2, title:"하계현장실습", year:"2016"},
	"0829":{type:1, title:"하계현장실습", year:"2016"},
	"0830":{type:1, title:"하계현장실습", year:"2016"},
	"0831":{type:1, title:"하계현장실습", year:"2016"},
	"0801":{type:1, title:"강의계획서 입력", year:"2016"},
	"0802":{type:1, title:"강의계획서 입력", year:"2016"},
	"0803":{type:1, title:"강의계획서 입력", year:"2016"},
	"0804":{type:1, title:"강의계획서 입력", year:"2016"},
	"0805":{type:1, title:"강의계획서 입력", year:"2016"},
	"0812":{type:1, title:"후기 학위수여일", year:"2016"},
	"0822":{type:1, title:"복학신청", year:"2016"},
	"0823":{type:1, title:"복학신청", year:"2016"},
	"0824":{type:1, title:"복학신청", year:"2016"},
	"0825":{type:1, title:"복학신청", year:"2016"},
	"0826":{type:1, title:"복학신청", year:"2016"},
	"0824":{type:1, title:"재학생 등록", year:"2016"},
	"0825":{type:1, title:"재학생 등록", year:"2016"},
	"0826":{type:1, title:"재학생 등록", year:"2016"},
	"0829":{type:1, title:"수강신청", year:"2016"},
	"0830":{type:1, title:"수강신청", year:"2016"},
	"0831":{type:1, title:"수강신청", year:"2016"},
	
	"0901":{type:1, title:"2학기 개강", year:"2016"},
	"0905":{type:1, title:"2016-2 재학생 및 복학생 추가등록", year:"2016"},
	"0906":{type:1, title:"2016-2 재학생 및 복학생 추가등록", year:"2016"},
	"0907":{type:1, title:"2016-2 재학생 및 복학생 추가등록", year:"2016"},
	"0908":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0909":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0910":{type:3, title:"2017학년도 수시1차 모집", year:"2016"},
	"0911":{type:2, title:"2017학년도 수시1차 모집", year:"2016"},
	"0912":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0913":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0914":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0915":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0916":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0917":{type:3, title:"2017학년도 수시1차 모집", year:"2016"},
	"0918":{type:2, title:"2017학년도 수시1차 모집", year:"2016"},
	"0919":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0920":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0921":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0922":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0923":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0924":{type:3, title:"2017학년도 수시1차 모집", year:"2016"},
	"0925":{type:2, title:"2017학년도 수시1차 모집", year:"2016"},
	"0926":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0927":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0928":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0929":{type:1, title:"2017학년도 수시1차 모집", year:"2016"},
	"0923":{type:1, title:"제44회 개교기념식", year:"2016"},
	
	"1005":{type:1, title:"연지축제", year:"2016"},
	"1006":{type:1, title:"연지축제", year:"2016"},
	"1007":{type:1, title:"연지축제", year:"2016"},
	"1013":{type:1, title:"졸업예배", year:"2016"},
	"1020":{type:1, title:"중간고사", year:"2016"},
	"1021":{type:1, title:"중간고사", year:"2016"},
	"1022":{type:3, title:"중간고사", year:"2016"},
	"1023":{type:2, title:"중간고사", year:"2016"},
	"1024":{type:1, title:"중간고사", year:"2016"},
	"1025":{type:1, title:"중간고사", year:"2016"},
	"1026":{type:1, title:"중간고사", year:"2016"},
	
	"1108":{type:1, title:"추수감사절예배", year:"2016"},
	"1109":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1110":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1111":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1112":{type:3, title:"2017학년도 수시2차 모집", year:"2016"},
	"1113":{type:2, title:"2017학년도 수시2차 모집", year:"2016"},
	"1114":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1115":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1116":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1117":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1118":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	"1119":{type:3, title:"2017학년도 수시2차 모집", year:"2016"},
	"1120":{type:2, title:"2017학년도 수시2차 모집", year:"2016"},
	"1121":{type:1, title:"2017학년도 수시2차 모집", year:"2016"},
	
	"1208":{type:1, title:"보강주간", year:"2016"},
	"1209":{type:1, title:"보강주간", year:"2016"},
	"1210":{type:3, title:"보강주간", year:"2016"},
	"1211":{type:2, title:"보강주간", year:"2016"},
	"1212":{type:1, title:"보강주간", year:"2016"},
	"1213":{type:1, title:"보강주간", year:"2016"},
	"1214":{type:1, title:"보강주간", year:"2016"},
	"1215":{type:1, title:"기말시험", year:"2016"},
	"1216":{type:1, title:"기말시험", year:"2016"},
	"1217":{type:3, title:"기말시험", year:"2016"},
	"1218":{type:2, title:"기말시험", year:"2016"},
	"1219":{type:1, title:"기말시험", year:"2016"},
	"1220":{type:1, title:"기말시험", year:"2016"},
	"1221":{type:1, title:"기말시험", year:"2016"},
	"1215":{type:1, title:"성적입력", year:"2016"},
	"1216":{type:1, title:"성적입력", year:"2016"},
	"1217":{type:1, title:"성적입력", year:"2016"},
	"1218":{type:1, title:"성적입력", year:"2016"},
	"1219":{type:1, title:"성적입력", year:"2016"},
	"1220":{type:1, title:"성적입력", year:"2016"},
	"1221":{type:1, title:"성적입력", year:"2016"},
	"1222":{type:1, title:"성적입력", year:"2016"},
	"1223":{type:1, title:"성적입력", year:"2016"},
	"1213":{type:1, title:"성탄축제 예배", year:"2016"},
	"1222":{type:1, title:"동계현장실습 개시", year:"2016"},
	"1226":{type:1, title:"강의평가,성적열람 및 정정", year:"2016"},
	"1227":{type:1, title:"강의평가,성적열람 및 정정", year:"2016"},
	"1228":{type:1, title:"강의평가,성적열람 및 정정", year:"2016"},
	
	"0102":{type:1, title:"시무식", year:"2017"},
	"0103":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0104":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0105":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0106":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0107":{type:3, title:"2017학년도 정시모집", year:"2017"},
	"0108":{type:2, title:"2017학년도 정시모집", year:"2017"},
	"0109":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0110":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0111":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0112":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0113":{type:1, title:"2017학년도 정시모집", year:"2017"},
	"0131":{type:1, title:"강의계획서 입력", year:"2017"},
	
	"0201":{type:1, title:"강의계획서 입력", year:"2017"},
	"0202":{type:1, title:"강의계획서 입력", year:"2017"},
	"0203":{type:1, title:"강의계획서 입력", year:"2017"},
	
    };

$( function() {
				$(".1").hide();
				$(".2").hide();
				$(".3").hide();
				$(".4").hide();
				$(".5").hide();
				$(".6").hide();
				$(".7").hide();
				$(".8").hide();
				$(".9").hide();
				$(".10").hide();
				$(".11").hide();
				$(".12").hide();
	
    	$( "#datepicker" ).datepicker({
      	inline: true,
		autoSize: false, 
      	showOtherMonths: true,
      	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	   	monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", 
        			"7월", "8월", "9월", "10월", "11월", "12월" ] ,
		 nextText: "다음달" ,
		 prevText: "이전달" ,
		 currentText: '오늘',
		 yearSuffix: '년',
		 minDate: new Date(2016,3-1,1),   
		 maxDate: new Date(2017,2-1,28),
		 buttonImageOnly: true, 
		// showButtonPanel: true,
         showMonthAfterYear:true,
		 beforeShowDay: function(day) {
			var result;
			var type = holidays[$.datepicker.formatDate(type)];
			var holiday = holidays[$.datepicker.formatDate("mmdd",day )];
			var thisYear = $.datepicker.formatDate("yy", day);
	
			if (holiday) {
				if(thisYear == holiday.year || holiday.year == "") {
					if(1 == holiday.type )
					{
						result =  [true, "date-schedule", holiday.title];
					}
					
					else if(2 == holiday.type )
					{
						result =  [true, "date-schedule2", holiday.title];
					}
					else if(3 == holiday.type )
					{
						result =  [true, "date-schedule3", holiday.title];
					}
					
					else
					{
						result =  [true, "date-holiday", holiday.title];
					}
				}
			}

			if(!result) {
				switch (day.getDay()) {
					case 0: // 일요일확인
						result = [true, "date-sunday"];
						break;
					case 6: // 토요일확인
						result = [true, "date-saturday"];
						break;
					default:
						result = [true, ""];
						break;
				}
			}

			return result;
		}
	});
});

function Alert() {
   var date = $("#datepicker").datepicker('getDate');
   month = date.getMonth()+1;

   switch(month){

      case 1:
      $(".1").show();
      break;

      case 2:
      $(".2").show();
      break;

      case 3:
      $(".3").show();
      break;

      case 4:
      $(".4").show();
      break;

      case 5:
      $(".5").show();
      break;

      case 6:
      $(".6").show();
      break;

      case 7:
      $(".7").show();
      break;

      case 8:
      $(".8").show();
      break;

      case 9:
      $(".9").show();
      break;

      case 10:
      $(".10").show();
      break;

      case 11:
      $(".11").show();
      break;

      case 12:
      $(".12").show();
      break;
   }

   $(document).on('click','.ui-datepicker-next',function(){
   month=month+1;
   if(month<1 ||month==13)
   {
      if(month<2)
      {
         month=12;
      }
      if(month==13)
      {
         month=1;
      }
   }

   switch(month){
      case 1:
      $(".1").show();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 2:
      $(".1").hide();
      $(".2").show();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 3:
      $(".1").hide();
      $(".2").hide();
      $(".3").show();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 4:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").show();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 5:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").show();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 6:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").show();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 7:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").show();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 8:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").show();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 9:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").show();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 10:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").show();
      $(".11").hide();
      $(".12").hide();
      break;

      case 11:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").show();
      $(".12").hide();
      break;

      case 12:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").show();
      break;

      default:
      break;
   }
   });
   
   $(document).on('click','.ui-datepicker-prev',function(){
   month=month-1;
   if(month<1 ||month==13)
   {
      if(month<1)
      {
         month=12;
      }
      if(month==13)
      {
         month=1;
      }
   }
   
   switch(month){
      case 1:
      $(".1").show();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 2:
      $(".1").hide();
      $(".2").show();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 3:
      $(".1").hide();
      $(".2").hide();
      $(".3").show();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 4:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").show();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 5:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").show();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 6:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").show();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 7:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").show();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 8:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").show();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 9:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").show();
      $(".10").hide();
      $(".11").hide();
      $(".12").hide();
      break;

      case 10:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").show();
      $(".11").hide();
      $(".12").hide();
      break;

      case 11:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").show();
      $(".12").hide();
      break;

      case 12:
      $(".1").hide();
      $(".2").hide();
      $(".3").hide();
      $(".4").hide();
      $(".5").hide();
      $(".6").hide();
      $(".7").hide();
      $(".8").hide();
      $(".9").hide();
      $(".10").hide();
      $(".11").hide();
      $(".12").show();
      break;

      default:
      break;
   }
   });

   }
$(function () {
    var $hotSearchResult;
    var $collegeListResult;

    $.fn.hotSearchColorChange = function () {
        if ($hotSearchResult == "block") {
            $(this).css("color", "#ae1e4c");
        } else {
            $(this).css("color", "");
        }
    }

    $.fn.collegeListColorChange = function () {
        if ($collegeListResult == "block") {
            $(this).css("color", "#ae1e4c");
        } else {
            $(this).css("color", "");
        }
    }

    $.fn.hotSearchListInit = function () {
        $("#pb_Hot_Search_Result1").hide();
        $("#pb_Hot_Search_Result2").hide();
        $("#pb_Hot_Search_Result3").hide();
        $("#pb_Hot_Search_Result4").hide();
    }

    $.fn.hotSearchColorInit = function () {
        $("#pb_Hot_Search_list1").css("color", "");
        $("#pb_Hot_Search_list2").css("color", "");
        $("#pb_Hot_Search_list3").css("color", "");
        $("#pb_Hot_Search_list4").css("color", "");
    }

    $.fn.collegeColorInit = function () {
        $("#BubIn").css("color", "");
        $("#BiSeo").css("color", "");
        $("#GyoMok").css("color", "");
        $("#GukJe").css("color", "");
        $("#ChangEop").css("color", "");
        $("#BongSa").css("color", "");
        $("#KiHoek").css("color", "");
        $("#GyoMu").css("color", "");
        $("#SanHak").css("color", "");
        $("#HakSangCuh").css("color", "");
        $("#IpHak").css("color", "");
        $("#SaMu").css("color", "");
        $("#YeBiGun").css("color", "");
        $("#Library").css("color", "");
        $("#MiRae").css("color", "");
        $("#Newspaper").css("color", "");
        $("#IBS").css("color", "");
        $("#AJung").css("color", "");
        $("#SangDam").css("color", "");
        $("#DaeOe").css("color", "");
        $("#GyoSu").css("color", "");
        $("#JunSan").css("color", "");
        $("#SuWe").css("color", "");
        $("#MyoungYe").css("color", "");
        $("#DongChang").css("color", "");
        $("#Student").css("color", "");
        $("#PyeonUi").css("color", "");
    }

    $(".btn").click(function () {
        var $searchWord = $(".pb_PhoneSearch_Text").val();
        var $word = "";
        var $office = "";
        for (var $i = 0; $i < $(".row_table>li").length; $i++) {
            $word += $(".row_table>li").eq($i).text() + " / ";
        }

        if ($searchWord.length < 2) {
            alert("2자리 수 이상 입력해주세요");
        } else {
            if ($word.indexOf($searchWord) != -1) {
                for (var $i = 0; $i < $(".row_table>li").length; $i++) {
                    $office = $(".row_table>li").eq($i).text();
                    var $searchResult = $office.indexOf($searchWord);
                    if ($searchResult != -1) {
                        $(".office").hide();
                        $(this).collegeColorInit();
                        $(".office").eq($i).show();
                        $(".row_table>li").eq($i).css("color", "#ae1e4c");
                    }
                }
            } else {
                alert("검색결과가 없습니다");
            }
        }
    });

    $(".pb_PhoneSearch_Text").keydown(function (event) {
        if (event.keyCode == "13") {
            var $searchWord = $(".pb_PhoneSearch_Text").val();
            var $word = "";
            var $office = "";
            for (var $i = 0; $i < $(".row_table>li").length; $i++) {
                $word += $(".row_table>li").eq($i).text() + " / ";
            }

            if ($searchWord.length < 2) {
                alert("2자리 수 이상 입력해주세요");
            } else {
                if ($word.indexOf($searchWord) != -1) {
                    for (var $i = 0; $i < $(".row_table>li").length; $i++) {
                        $office = $(".row_table>li").eq($i).text();
                        var $searchResult = $office.indexOf($searchWord);
                        if ($searchResult != -1) {
                            $(".office").hide();
                            $(this).collegeColorInit();
                            $(".office").eq($i).show();
                            $(".row_table>li").eq($i).css("color", "#ae1e4c");
                        }
                    }
                } else {
                    alert("검색결과가 없습니다");
                }
            }
        }
    });

    // *** Hot_Search ***
    // Default 설정 (1:학생처, 2:입학처, 3:사회봉사단, 4:창업지원단)
    $(this).hotSearchListInit();

    // 리스트 클릭시 HotSearch on/off 효과
    $("#pb_Hot_Search_list1").click(function () {
        $(this).hotSearchColorInit();
        $("#pb_Hot_Search_Result1").toggle();
        $hotSearchResult = $("#pb_Hot_Search_Result1").css("display");
        $(this).hotSearchColorChange();
    });

    $("#pb_Hot_Search_list2").click(function () {
        $(this).hotSearchColorInit();
        $("#pb_Hot_Search_Result2").toggle();
        $hotSearchResult = $("#pb_Hot_Search_Result2").css("display");
        $(this).hotSearchColorChange();
    });

    $("#pb_Hot_Search_list3").click(function () {
        $(this).hotSearchColorInit();
        $("#pb_Hot_Search_Result3").toggle();
        $hotSearchResult = $("#pb_Hot_Search_Result3").css("display");
        $(this).hotSearchColorChange();
    });

    $("#pb_Hot_Search_list4").click(function () {
        $(this).hotSearchColorInit();
        $("#pb_Hot_Search_Result4").toggle();
        $hotSearchResult = $("#pb_Hot_Search_Result4").css("display");
        $(this).hotSearchColorChange();
    });

    // *** 행정사무실/학과 버튼 *** 	
    // Default 설정, 기본으로 행정사무실 리스트 출력, 부서리스트 hide, 리스트는 하단 참고
    // $("#office_list").hide();
    $("#college_list").hide();
    // * 행정사무실 *
    $("#BubIn_list").hide();
    $("#BiSeo_list").hide();
    $("#GyoMok_list").hide();
    $("#GukJe_list").hide();
    $("#ChangEop_list").hide();
    $("#BongSa_list").hide();
    $("#KiHoek_list").hide();
    $("#GyoMu_list").hide();
    $("#SanHak_list").hide();
    $("#HakSangCuh_list").hide();
    $("#IpHak_list").hide();
    $("#SaMu_list").hide();
    $("#YeBiGun_list").hide();
    $("#Library_list").hide();
    $("#MiRae_list").hide();
    $("#Newspaper_list").hide();
    $("#IBS_list").hide();
    $("#AJung_list").hide();
    $("#SangDam_list").hide();
    $("#DaeOe_list").hide();
    $("#GyoSu_list").hide();
    $("#JunSan_list").hide();
    $("#SuWe_list").hide();
    $("#MyoungYe_list").hide();
    $("#DongChang_list").hide();
    $("#Student_list").hide();
    $("#PyeonUi_list").hide();



    // 부서 클릭시 연락처 on/off 효과
    // * 행정사무실 *
    $("#BubIn").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#BubIn_list").toggle();
        $collegeListResult = $("#BubIn_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#BiSeo").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#BiSeo_list").toggle();
        $collegeListResult = $("#BiSeo_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#GyoMok").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#GyoMok_list").toggle();
        $collegeListResult = $("#GyoMok_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#GukJe").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#GukJe_list").toggle();
        $collegeListResult = $("#GukJe_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#ChangEop").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#ChangEop_list").toggle();
        $collegeListResult = $("#ChangEop_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#BongSa").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#BongSa_list").toggle();
        $collegeListResult = $("#BongSa_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#KiHoek").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#KiHoek_list").toggle();
        $collegeListResult = $("#KiHoek_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#GyoMu").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#GyoMu_list").toggle();
        $collegeListResult = $("#GyoMu_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#SanHak").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#SanHak_list").toggle();
        $collegeListResult = $("#SanHak_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#HakSangCuh").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#HakSangCuh_list").toggle();
        $collegeListResult = $("#HakSangCuh_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#IpHak").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#IpHak_list").toggle();
        $collegeListResult = $("#IpHak_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#SaMu").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#SaMu_list").toggle();
        $collegeListResult = $("#SaMu_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#YeBiGun").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#YeBiGun_list").toggle();
        $collegeListResult = $("#YeBiGun_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#Library").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#Library_list").toggle();
        $collegeListResult = $("#Library_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#MiRae").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#MiRae_list").toggle();
        $collegeListResult = $("#MiRae_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#Newspaper").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#Newspaper_list").toggle();
        $collegeListResult = $("#Newspaper_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#IBS").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#IBS_list").toggle();
        $collegeListResult = $("#IBS_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#AJung").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#AJung_list").toggle();
        $collegeListResult = $("#AJung_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#SangDam").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#SangDam_list").toggle();
        $collegeListResult = $("#SangDam_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#DaeOe").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#DaeOe_list").toggle();
        $collegeListResult = $("#DaeOe_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#GyoSu").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#GyoSu_list").toggle();
        $collegeListResult = $("#GyoSu_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#JunSan").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#JunSan_list").toggle();
        $collegeListResult = $("#JunSan_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#SuWe").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#SuWe_list").toggle();
        $collegeListResult = $("#SuWe_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#MyoungYe").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#MyoungYe_list").toggle();
        $collegeListResult = $("#MyoungYe_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#DongChang").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#DongChang_list").toggle();
        $collegeListResult = $("#DongChang_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#Student").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#Student_list").toggle();
        $collegeListResult = $("#Student_list").css("display");
        $(this).collegeListColorChange();
    });
    $("#PyeonUi").click(function () {
        $(this).collegeColorInit();
        $(".office").hide();
        $("#PyeonUi_list").toggle();
        $collegeListResult = $("#PyeonUi_list").css("display");
        $(this).collegeListColorChange();
    });
});
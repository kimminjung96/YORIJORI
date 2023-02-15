//top_btn_hide
sidebar_hide();
function sidebar_hide(){
    $(document).ready(function () {
        $("#sidebar-wrapper").css('display','none');
      });
}

// top_btn
top_btn();
function top_btn() {
    $(window).scroll(function () {
        if ($(document).scrollTop() > $(window).height() / 2) {
            $("#sidebar-wrapper").fadeIn(300);
        } else {
            $("#sidebar-wrapper").fadeOut(300);
        }
    });
    $(".btn_top").click(function () {
        $("body,html").stop().animate({ scrollTop: "0" }, 300);
        return false;
    });
}
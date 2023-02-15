//top_btn_hide
top_btn_hide();
function top_btn_hide(){
    $(document).ready(function () {
        $(".btn_top").css('display','none');
      });
}

// top_btn
top_btn();
function top_btn() {
    $(window).scroll(function () {
        if ($(document).scrollTop() > $(window).height() / 2) {
            $(".btn_top").fadeIn(300);
        } else {
            $(".btn_top").fadeOut(300);
        }
    });
    $(".btn_top").click(function () {
        $("body,html").stop().animate({ scrollTop: "0" }, 300);
        return false;
    });
}
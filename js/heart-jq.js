var i = 0;
$("i").on("click", function () {
  if (i == 0) {
    $(this).attr("class", "bi-heart-fill");
    i++;
  } else if (i == 1) {
    $(this).attr("class", "bi-heart");
    i--;
  }
});
/* sub_title */
let mainText = document.querySelector(".sub_title");

window.addEventListener("scroll", function () {
  let value = window.scrollY; //스크롤 y좌표 가져옴
  // console.log(value);

  if (value < 900) {
    //js에서 css변경
    mainText.style.animation = "disappear 1s ease-out forwards"; /* forwards:키프레임이 100%도달하였을때 마지막 키프레임을 유지 */
  } else {
    mainText.style.animation = "slide 1s ease-out";
  }
});

/* 버튼슬롯효과 */
start();

function start() {
  odoo.default({ el: ".js-odoo", from: "WESTERN", to: "CHINESE" });
  setTimeout(end, 8000);
}

function end() {
  odoo.default({ el: ".js-odoo", from: "CHINESE ", to: "WESTERN" });
}
setInterval(start, 18000);

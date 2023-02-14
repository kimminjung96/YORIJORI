/* sub_title ------------------------------------------------------*/
let mainText = document.querySelector(".sub_title");

window.addEventListener("scroll", function () {
  let value = window.scrollY; //스크롤 y좌표 가져옴
  // console.log(value);

  if (value < 2300) {
    //js에서 css변경
    mainText.style.animation = "disappear 1s ease-out forwards"; /* forwards:키프레임이 100%도달하였을때 마지막 키프레임을 유지 */
  } else {
    mainText.style.animation = "slide 1s ease-out";
  }
});

/* 버튼슬롯효과 ------------------------------------------------------------*/
start();

function start() {
  odoo.default({ el: ".js-odoo", from: "WESTERN", to: "CHINESE" });
  setTimeout(end, 8000);
}

function end() {
  odoo.default({ el: ".js-odoo", from: "CHINESE ", to: "WESTERN" });
}
setInterval(start, 18000);

/* ---------------------------------------------------- */
/* KOREAN BUTTON */
let searchButton = document.querySelector(".btn_kr");
let element = document.querySelector(".change");

searchButton.addEventListener("click", () => {
  sendApiRequest();
  // element.classList.add("d-none");
});

//api promise fetch
async function sendApiRequest() {
  let APP_ID = "e9af3c1c";
  let API_KEY = "287ddc6bfccb96c0d47866b92b186ab2";

  let random_num = [];
  let i = 0;
  let random_num1, random_num2, random_num3;

  //url
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=korean`);
  let data = await response.json();
  console.log(data);

  //random
  while (i < 3) {
    let n = Math.floor(Math.random() * 10); /* 0~9 */
    // return == false; arr.push
    if (!same_num(n)) {
      random_num.push(n);
      i++;
    }
  }
  //중복숫자방지
  function same_num(n) {
    for (let i = 0; i < random_num.length; i++) {
      if (n === random_num[i]) {
        return true; /* true; no push */
      }
    }
    return false;
  }
  random_num1 = random_num[0];
  random_num2 = random_num[1];
  random_num3 = random_num[2];

  useApiData(data, random_num1, random_num2, random_num3);
}

function useApiData(data, num1, num2, num3) {
  let title1 = "error";
  let title2 = "error";
  let title3 = "error";

  switch (num1) {
    case 0:
      title1 = "쌈장 레시피";
      break;
    case 1:
      title1 = "바베큐 그릴 고구마";
      break;
    case 2:
      title1 = "로메인 샐러드";
      break;
    case 3:
      title1 = "메밀국수";
      break;
    case 4:
      title1 = "양념치킨";
      break;
    case 5:
      title1 = "스파이시 바비큐 버터 불고기";
      break;
    case 6:
      title1 = "두부조림";
      break;
    case 7:
      title1 = "간장불고기";
      break;
    case 8:
      title1 = "고등어구이";
      break;
    case 9:
      title1 = "닭가슴살 비빔밥";
      break;
  }

  switch (num2) {
    case 0:
      title2 = "쌈장 레시피";
      break;
    case 1:
      title2 = "바베큐 그릴 고구마";
      break;
    case 2:
      title2 = "로메인 샐러드";
      break;
    case 3:
      title2 = "메밀국수";
      break;
    case 4:
      title2 = "양념치킨";
      break;
    case 5:
      title2 = "스파이시 바비큐 버터 불고기";
      break;
    case 6:
      title2 = "두부조림";
      break;
    case 7:
      title2 = "간장불고기";
      break;
    case 8:
      title2 = "고등어구이";
      break;
    case 9:
      title2 = "닭가슴살 비빔밥";
      break;
  }

  switch (num3) {
    case 0:
      title3 = "쌈장 레시피";
      break;
    case 1:
      title3 = "바베큐 그릴 고구마";
      break;
    case 2:
      title3 = "로메인 샐러드";
      break;
    case 3:
      title3 = "메밀국수";
      break;
    case 4:
      title3 = "양념치킨";
      break;
    case 5:
      title3 = "스파이시 바비큐 버터 불고기";
      break;
    case 6:
      title3 = "두부조림";
      break;
    case 7:
      title3 = "간장불고기";
      break;
    case 8:
      title3 = "고등어구이";
      break;
    case 9:
      title3 = "닭가슴살 비빔밥";
      break;
  }
  /* (${data.hits[num1].recipe.label}) */
  //출력
  document.querySelector(".content1").innerHTML = `
<div class="card m-4">
  <img src="${data.hits[num1].recipe.image}" class="card-img-top" alt="랜덤이미지">
  <div class="card-body">
    <h5 class="card-title text-center">${title1}<br></h5>
    <p class="card-text">칼로리: ${data.hits[num1].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} Kcal</p>
    <p class="card-text">탄수화물: ${data.hits[num1].recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g</p>
    <p class="card-text">단백질: ${data.hits[num1].recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g</p>
    <p class="card-text">지방: ${data.hits[num1].recipe.totalNutrients.FAT.quantity.toFixed(2)} g</p>
    
    <a href="${data.hits[num1].recipe.url}" target="_blank"><img src="./img/img_200c.png" alt="조리법링크" class="d-block bg_chief"></a>
    <a href="https://kr.freepik.com/free-vector/cute-bread-chef-waving-hand-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-flat_24921538.htm#query=mascot%20chif&position=14&from_view=search&track=ais" target="_blank" style="font-size: 2px; "> IMG: Freepik</a>
  </div>
</div>
`;

  /* (${data.hits[num2].recipe.label}) */
  document.querySelector(".content2").innerHTML = `
<div class="card m-4" >
  <img src="${data.hits[num2].recipe.image}" class="card-img-top" alt="랜덤이미지">
  <div class="card-body">
  <h5 class="card-title text-center">${title2}<br></h5>
  <p class="card-text">칼로리:  ${data.hits[num2].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} Kcal</p>
  <p class="card-text">탄수화물: ${data.hits[num2].recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g</p>
  <p class="card-text">단백질: ${data.hits[num2].recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g</p>
  <p class="card-text">지방: ${data.hits[num2].recipe.totalNutrients.FAT.quantity.toFixed(2)} g</p>
  <a href="${data.hits[num2].recipe.url}" target="_blank"><img src="./img/img_200b.png" alt="조리법링크" class="d-block bg_chief"></a>
  </div>
</div>
<h5 class="text-center txt_blink">캐릭터를 눌러 레시피를 확인하세요!</h5>`;

  document.querySelector(".content3").innerHTML = `
<div class="card m-4" >
<img src="${data.hits[num3].recipe.image}" class="card-img-top" alt="랜덤이미지">
<div class="card-body">
<h5 class="card-title text-center">${title3}<br></h5>
    <p class="card-text">칼로리:  ${data.hits[num3].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} Kcal</p>
    <p class="card-text">탄수화물: ${data.hits[num3].recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g</p>
    <p class="card-text">단백질: ${data.hits[num3].recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g</p>
    <p class="card-text">지방: ${data.hits[num3].recipe.totalNutrients.FAT.quantity.toFixed(2)} g</p>
    <a href="${data.hits[num3].recipe.url}" target="_blank" ><img src="./img/img_200t.png" alt="조리법링크" class="d-block bg_chief"></a>
    <a href="https://www.edamam.com/" target="_blank" style="font-size: 2px; "> API: edamam </a>
  </div>
</div>`;
}
/* text-decoration:none; color:black; */
/* //KOREAN BUTTON */
/* ---------------------------------------------------- */

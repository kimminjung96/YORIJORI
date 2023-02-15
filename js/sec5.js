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

/* button random---------------------------------------------------- */
/* korean BUTTON */
let searchButton1 = document.querySelector(".btn_kr");
/* western, chinese */
let searchButton2 = document.querySelector(".btn_wc");
/* japanese */
let searchButton3 = document.querySelector(".btn_jp");

let element = document.querySelector(".change");

/* click event*/
searchButton1.addEventListener("click", () => {
  let food_type = "korean";
  let txt_none = document.querySelector(".txt_guide");
  txt_none.classList.add("d-none");
  sendApiRequest(food_type);
});

searchButton2.addEventListener("click", () => {
  let food_type;
  let txt_none = document.querySelector(".txt_guide");
  let n = Math.floor(Math.random() * 2); /* 0~1 */

  //chinese or western random
  if (n === 0) {
    food_type = "chinese";
  } else food_type = "western";

  txt_none.classList.add("d-none");
  sendApiRequest(food_type);
});

searchButton3.addEventListener("click", () => {
  let food_type = "japanese";
  let txt_none = document.querySelector(".txt_guide");
  txt_none.classList.add("d-none");
  sendApiRequest(food_type);
});

/* API promise fetch */
async function sendApiRequest(f_tp) {
  let APP_ID = "e9af3c1c";
  let API_KEY = "287ddc6bfccb96c0d47866b92b186ab2";
  let type = f_tp;
  let random_num = [];
  let i = 0;
  

  // console.log(type);
  //url
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${type}`);
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

  useApiData(data, random_num, type);
}

function useApiData(data, rn, tp) {
  let title1 = "error";
  let title2 = "error";
  let title3 = "error";

  let num1 = rn[0];
  let num2 = rn[1];
  let num3 = rn[2];

  /*   console.log("타입 :", tp);
  console.log("타입번호:", num1); */

  /* 제목 한글화 */
  //card title-1
  if (num1 === 0 && tp === "korean") {
    title1 = "쌈장 레시피";
  } else if (num1 === 0 && tp === "chinese") {
    title1 = "동파육";
  } else if (num1 === 0 && tp === "western") {
    title1 = "스팸 오믈렛";
  } else if (num1 === 0 && tp === "japanese") {
    title1 = "된장순무";
  }
  if (num1 === 1 && tp === "korean") {
    title1 = "바베큐 그릴 고구마";
  } else if (num1 === 1 && tp === "chinese") {
    title1 = "치즈 브로콜리";
  } else if (num1 === 1 && tp === "western") {
    title1 = "토스트 & 베이직 오믈렛";
  } else if (num1 === 1 && tp === "japanese") {
    title1 = "해초샐러드";
  }
  if (num1 === 2 && tp === "korean") {
    title1 = "로메인 샐러드";
  } else if (num1 === 2 && tp === "chinese") {
    title1 = "씨앗 믹스";
  } else if (num1 === 2 && tp === "western") {
    title1 = "방울토마토 옥수수 샐러드";
  } else if (num1 === 2 && tp === "japanese") {
    title1 = "순무 무침";
  }
  if (num1 === 3 && tp === "korean") {
    title1 = "메밀국수";
  } else if (num1 === 3 && tp === "chinese") {
    title1 = "에그 누들 수프";
  } else if (num1 === 3 && tp === "western") {
    title1 = "햄치즈어니언 오믈렛";
  } else if (num1 === 3 && tp === "japanese") {
    title1 = "일본식 포크 커틀릿";
  }
  if (num1 === 4 && tp === "korean") {
    title1 = "양념치킨";
  } else if (num1 === 4 && tp === "chinese") {
    title1 = "시금치 김치";
  } else if (num1 === 4 && tp === "western") {
    title1 = "핀토빈 베이컨";
  } else if (num1 === 4 && tp === "japanese") {
    title1 = "가지찜";
  }
  if (num1 === 5 && tp === "korean") {
    title1 = "스파이시 바비큐 버터 불고기";
  } else if (num1 === 5 && tp === "chinese") {
    title1 = "돼지 브로콜리 찜";
  } else if (num1 === 5 && tp === "western") {
    title1 = "마카로니 치즈 베이컨 오믈렛";
  } else if (num1 === 5 && tp === "japanese") {
    title1 = "비프 카레 토스트";
  }
  if (num1 === 6 && tp === "korean") {
    title1 = "두부조림";
  } else if (num1 === 6 && tp === "chinese") {
    title1 = "중국식 돼지갈비";
  } else if (num1 === 6 && tp === "western") {
    title1 = "오믈렛 롤업";
  } else if (num1 === 6 && tp === "japanese") {
    title1 = "일본식 피클";
  }
  if (num1 === 7 && tp === "korean") {
    title1 = "간장불고기";
  } else if (num1 === 7 && tp === "chinese") {
    title1 = "중국식 간장 치킨";
  } else if (num1 === 7 && tp === "western") {
    title1 = "베이컨치즈버거";
  } else if (num1 === 7 && tp === "japanese") {
    title1 = "계란 커스터드";
  }
  if (num1 === 8 && tp === "korean") {
    title1 = "고등어구이";
  } else if (num1 === 8 && tp === "chinese") {
    title1 = "중국식 양갈비";
  } else if (num1 === 8 && tp === "western") {
    title1 = "라베를 곁들인 국수튀김";
  } else if (num1 === 8 && tp === "japanese") {
    title1 = "순무볶음";
  }
  if (num1 === 9 && tp === "korean") {
    title1 = "닭가슴살 비빔밥";
  } else if (num1 === 9 && tp === "chinese") {
    title1 = "새콤달콤 게무침";
  } else if (num1 === 9 && tp === "western") {
    title1 = "체다치즈 스파게티";
  } else if (num1 === 9 && tp === "japanese") {
    title1 = "버터빵가루 스파게티";
  }

  //card title-2
  if (num2 === 0 && tp === "korean") {
    title2 = "쌈장 레시피";
  } else if (num2 === 0 && tp === "chinese") {
    title2 = "동파육";
  } else if (num2 === 0 && tp === "western") {
    title2 = "스팸 오믈렛";
  } else if (num2 === 0 && tp === "japanese") {
    title2 = "된장순무";
  }
  if (num2 === 1 && tp === "korean") {
    title2 = "바베큐 그릴 고구마";
  } else if (num2 === 1 && tp === "chinese") {
    title2 = "치즈 브로콜리";
  } else if (num2 === 1 && tp === "western") {
    title2 = "토스트 & 베이직 오믈렛";
  } else if (num2 === 1 && tp === "japanese") {
    title2 = "해초샐러드";
  }
  if (num2 === 2 && tp === "korean") {
    title2 = "로메인 샐러드";
  } else if (num2 === 2 && tp === "chinese") {
    title2 = "씨앗 믹스";
  } else if (num2 === 2 && tp === "western") {
    title2 = "방울토마토 옥수수 샐러드";
  } else if (num2 === 2 && tp === "japanese") {
    title2 = "순무 무침";
  }
  if (num2 === 3 && tp === "korean") {
    title2 = "메밀국수";
  } else if (num2 === 3 && tp === "chinese") {
    title2 = "에그 누들 수프";
  } else if (num2 === 3 && tp === "western") {
    title2 = "햄치즈어니언 오믈렛";
  } else if (num2 === 3 && tp === "japanese") {
    title2 = "일본식 포크 커틀릿";
  }
  if (num2 === 4 && tp === "korean") {
    title2 = "양념치킨";
  } else if (num2 === 4 && tp === "chinese") {
    title2 = "시금치 김치";
  } else if (num2 === 4 && tp === "western") {
    title2 = "핀토빈 베이컨";
  } else if (num2 === 4 && tp === "japanese") {
    title2 = "가지찜";
  }
  if (num2 === 5 && tp === "korean") {
    title2 = "스파이시 바비큐 버터 불고기";
  } else if (num2 === 5 && tp === "chinese") {
    title2 = "돼지 브로콜리 찜";
  } else if (num2 === 5 && tp === "western") {
    title2 = "마카로니 치즈 베이컨 오믈렛";
  } else if (num2 === 5 && tp === "japanese") {
    title2 = "비프 카레 토스트";
  }
  if (num2 === 6 && tp === "korean") {
    title2 = "두부조림";
  } else if (num2 === 6 && tp === "chinese") {
    title2 = "중국식 돼지갈비";
  } else if (num2 === 6 && tp === "western") {
    title2 = "오믈렛 롤업";
  } else if (num2 === 6 && tp === "japanese") {
    title2 = "일본식 피클";
  }
  if (num2 === 7 && tp === "korean") {
    title2 = "간장불고기";
  } else if (num2 === 7 && tp === "chinese") {
    title2 = "중국식 간장 치킨";
  } else if (num2 === 7 && tp === "western") {
    title2 = "베이컨치즈버거";
  } else if (num2 === 7 && tp === "japanese") {
    title2 = "계란 커스터드";
  }
  if (num2 === 8 && tp === "korean") {
    title2 = "고등어구이";
  } else if (num2 === 8 && tp === "chinese") {
    title2 = "중국식 양갈비";
  } else if (num2 === 8 && tp === "western") {
    title2 = "라베를 곁들인 국수튀김";
  } else if (num2 === 8 && tp === "japanese") {
    title2 = "순무볶음";
  }
  if (num2 === 9 && tp === "korean") {
    title2 = "닭가슴살 비빔밥";
  } else if (num2 === 9 && tp === "chinese") {
    title2 = "새콤달콤 게무침";
  } else if (num2 === 9 && tp === "western") {
    title2 = "체다치즈 스파게티";
  } else if (num2 === 9 && tp === "japanese") {
    title2 = "버터빵가루 스파게티";
  }
  
  //card title-3
  if (num3 === 0 && tp === "korean") {
    title3 = "쌈장 레시피";
  } else if (num3 === 0 && tp === "chinese") {
    title3 = "동파육";
  } else if (num3 === 0 && tp === "western") {
    title3 = "스팸 오믈렛";
  } else if (num3 === 0 && tp === "japanese") {
    title3 = "된장순무";
  }
  if (num3 === 1 && tp === "korean") {
    title3 = "바베큐 그릴 고구마";
  } else if (num3 === 1 && tp === "chinese") {
    title3 = "치즈 브로콜리";
  } else if (num3 === 1 && tp === "western") {
    title3 = "토스트 & 베이직 오믈렛";
  } else if (num3 === 1 && tp === "japanese") {
    title3 = "해초샐러드";
  }
  if (num3 === 2 && tp === "korean") {
    title3 = "로메인 샐러드";
  } else if (num3 === 2 && tp === "chinese") {
    title3 = "씨앗 믹스";
  } else if (num3 === 2 && tp === "western") {
    title3 = "방울토마토 옥수수 샐러드";
  } else if (num3 === 2 && tp === "japanese") {
    title3 = "순무 무침";
  }
  if (num3 === 3 && tp === "korean") {
    title3 = "메밀국수";
  } else if (num3 === 3 && tp === "chinese") {
    title3 = "에그 누들 수프";
  } else if (num3 === 3 && tp === "western") {
    title3 = "햄치즈어니언 오믈렛";
  } else if (num3 === 3 && tp === "japanese") {
    title3 = "일본식 포크 커틀릿";
  }
  if (num3 === 4 && tp === "korean") {
    title3 = "양념치킨";
  } else if (num3 === 4 && tp === "chinese") {
    title3 = "시금치 김치";
  } else if (num3 === 4 && tp === "western") {
    title3 = "핀토빈 베이컨";
  } else if (num3 === 4 && tp === "japanese") {
    title3 = "가지찜";
  }
  if (num3 === 5 && tp === "korean") {
    title3 = "스파이시 바비큐 버터 불고기";
  } else if (num3 === 5 && tp === "chinese") {
    title3 = "돼지 브로콜리 찜";
  } else if (num3 === 5 && tp === "western") {
    title3 = "마카로니 치즈 베이컨 오믈렛";
  } else if (num3 === 5 && tp === "japanese") {
    title3 = "비프 카레 토스트";
  }
  if (num3 === 6 && tp === "korean") {
    title3 = "두부조림";
  } else if (num3 === 6 && tp === "chinese") {
    title3 = "중국식 돼지갈비";
  } else if (num3 === 6 && tp === "western") {
    title3 = "오믈렛 롤업";
  } else if (num3 === 6 && tp === "japanese") {
    title3 = "일본식 피클";
  }
  if (num3 === 7 && tp === "korean") {
    title3 = "간장불고기";
  } else if (num3 === 7 && tp === "chinese") {
    title3 = "중국식 간장 치킨";
  } else if (num3 === 7 && tp === "western") {
    title3 = "베이컨치즈버거";
  } else if (num3 === 7 && tp === "japanese") {
    title3 = "계란 커스터드";
  }
  if (num3 === 8 && tp === "korean") {
    title3 = "고등어구이";
  } else if (num3 === 8 && tp === "chinese") {
    title3 = "중국식 양갈비";
  } else if (num3 === 8 && tp === "western") {
    title3 = "라베를 곁들인 국수튀김";
  } else if (num3 === 8 && tp === "japanese") {
    title3 = "순무볶음";
  }
  if (num3 === 9 && tp === "korean") {
    title3 = "닭가슴살 비빔밥";
  } else if (num3 === 9 && tp === "chinese") {
    title3 = "새콤달콤 게무침";
  } else if (num3 === 9 && tp === "western") {
    title3 = "체다치즈 스파게티";
  } else if (num3 === 9 && tp === "japanese") {
    title3 = "버터빵가루 스파게티";
  }
 

  //prind card
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
/* //print card*/


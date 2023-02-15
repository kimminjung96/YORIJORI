const togglingBtns = document.querySelectorAll('.bi-heart'); 

togglingBtns.forEach(function(btns){ 
  btns.addEventListener ("click", function() { 
  btns.classList.toggle('bi-heart')
});
});
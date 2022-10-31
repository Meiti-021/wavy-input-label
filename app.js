const passBtn = document.querySelector('input[type="password"]');
const emailBtn = document.querySelector('input[type="email"]');
const emailLabel = document.querySelectorAll('.e');
const passLabel = document.querySelectorAll('.p');


emailBtn.addEventListener('focus', ()=>{
    emailLabel.forEach(function(letter,index){
        setTimeout(function() {
            letter.classList.add('active');
        }, index * 30); 
    })
})
emailBtn.addEventListener('blur', ()=>{
  if(!emailBtn.value){
    emailLabel.forEach(function(letter,index){
        setTimeout(function() {
            letter.classList.remove('active');
        }, index * 30); 
    })
  }
})
passBtn.addEventListener('focus', ()=>{
    passLabel.forEach(function(letter,index){
        setTimeout(function() {
            letter.classList.add('active');
        }, index * 30); 
    })
})
passBtn.addEventListener('blur', ()=>{
  if(!passBtn.value){ 
  passLabel.forEach(function(letter,index){
        setTimeout(function() {
            letter.classList.remove('active');
        }, index * 30); 
    })
  }
})
    
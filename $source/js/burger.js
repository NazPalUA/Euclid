const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', ()=>{
  navList.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('lock');
})
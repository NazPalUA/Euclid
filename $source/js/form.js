const checkBox = document.querySelector('#ag-check');
const agCheck = document.querySelector('.form__ag-check');

checkBox.addEventListener("click", event=>{
  agCheck.classList.toggle("active");
})
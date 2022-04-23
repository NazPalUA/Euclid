const searchBtn = document.querySelector(".search-box__search-btn");
const cancelBtn = document.querySelector(".search-box__cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box__input");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
});

searchInput.addEventListener("focus", () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
})

searchInput.addEventListener("blur", ()=>{
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
})
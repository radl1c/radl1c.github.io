const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".search");
const closeBox = document.querySelector(".close");

searchBox.addEventListener("click", () => {
	searchBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	searchBox.classList.remove("active");
});
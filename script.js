const shareBtn = document.getElementById("share-btn");
const profile = document.querySelector(".profile");

shareBtn.addEventListener("click", () => {
profile.classList.toggle("active");
});
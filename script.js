const shareBtn = document.getElementById("share-btn");
const closeBtn = document.getElementById("close-share");
const profile = document.querySelector(".profile");
const sharePopup = document.querySelector(".share-popup");

shareBtn.addEventListener("click", () => {
  profile.classList.add("hidden");
  sharePopup.classList.add("is-open");
  sharePopup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  sharePopup.classList.remove("is-open");
  sharePopup.classList.add("hidden");
  profile.classList.remove("hidden");
});
const feature = document.getElementById("features");
const cont = document.getElementById("features-container");

cont.addEventListener("click", () => {
  feature.classList.toggle("hidden");
});
//  TODOS OS LINKS ABREM EM OUTRA ABA
const links = document.querySelectorAll(".link");
links.forEach(function (link) {
  link.setAttribute("target", "_blank");
});

// SLIDER
const slider = document.getElementById("slider");
const cards = slider.children;
const totalCards = cards.length;
const visibleCards = 4;
let index = 0;

// Clonar os primeiros 4 cards para permitir loop infinito
for (let i = 0; i < visibleCards; i++) {
  const clone = cards[i].cloneNode(true);
  slider.appendChild(clone);
}

function moveSlider(step) {
  index += step;

  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;

  setTimeout(() => {
    if (index >= totalCards) {
      slider.style.transition = "none";
      index = 0;
      slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;
    } else if (index < 0) {
      slider.style.transition = "none";
      index = totalCards - visibleCards;
      slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;
    }
  }, 510);
}

document
  .querySelector(".arrow-left")
  .addEventListener("click", () => moveSlider(-visibleCards));
document
  .querySelector(".arrow-right")
  .addEventListener("click", () => moveSlider(visibleCards));

window.addEventListener("resize", () => {
  slider.style.transition = "none";
  slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;
});

const hero = document.querySelector(".hero");
const content = document.querySelector(".content");
hero.scrollIntoView();

const img_1 = document.querySelector(".contaner img:nth-child(1)");
const img_2 = document.querySelector(".contaner img:nth-child(2)");
const img_3 = document.querySelector(".contaner img:nth-child(3)");
const paralax = (e) => {
  let value = window.scrollY;
  let value2 = window.scrollY - 210;
  console.log(value);
  if (value >= 442) {
    img_3.style.marginBottom = 212 * 0.1 + "vw";
  } else {
    img_3.style.marginBottom = value2 * 0.1 + "vw";
  }
  content.marginTop = value2 * 1 + "vw";

  img_2.style.marginBottom = value2 * 0.02 + "vw";

  if (value <= 196) {
    img_1.style.marginBottom = 33 + value * 0.1 + "vw";
  } else {
    img_1.style.marginBottom = 33 + 196 * 0.1 + "vw";
  }
};

paralax();
window.addEventListener("scroll", paralax);

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entrys) => {
    entrys.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.6,
  }
);
cards.forEach((card) => {
  observer.observe(card);
});

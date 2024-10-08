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
    img_3.style.marginBottom = 215 * 0.1 + "vw";
  } else {
    img_3.style.marginBottom = value2 * 0.1 + "vw";
  }
  content.marginTop = value2 * 1 + "vw";

  img_2.style.marginBottom = (value2 + 220) * 0.03 + "vw";

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
// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2, // Controls the speed of the scroll animation
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  smooth: true, // Enables smooth scrolling
});

// Scroll update loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  loading.classList.add("hidden");
});

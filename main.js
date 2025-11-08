let search = document.querySelector(".search-box");
let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu-icon");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active"); // new: close navbar on small screens
};

let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () => {
  cart.classList.toggle("active");
  search.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active"); // new
};

let user = document.querySelector(".user");

document.querySelector("#user-icon").onclick = () => {
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active"); // new
};

// navbar scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
};

// close navbar when clicking a nav link (only on small screens)
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navbar.classList.remove("active");
    }
  });
});

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  grabCursor: true, // تظهر أيقونة اليد عند المرور وتسمح بالسحب
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

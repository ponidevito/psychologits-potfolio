// Custom scripts

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

// video
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add("playing");
    playButton.style.display = "none";
  } catch (err) {
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove("playing");
    document.getElementById("playbutton").style.display = "block";
  }
}
document.getElementById("video").onended = function () {
  document.getElementById("playbutton").style.display = "block";
};

// authors swiper

const swiper = new Swiper(".swiper-authors", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});

const swiperSecond = new Swiper(".swiper-cases", {
  loop: true,

  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 3.3,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 567px
    567: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1440px

    // when window width is >= 1920px
    1920: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

let html = document.querySelector("html");
let modal = document.querySelector(".action__btn");
let modalContent = document.querySelector(".action__content");
function openModal() {
  modal.classList.remove("_transform");
  modal.classList.add("_active");
  modalContent.classList.remove("_dnone");
  if (window.innerWidth < 768) {
    modal.classList.add("_transform");
    modal.classList.remove("_active");
    modalContent.classList.add("_dnone");

  }


  
}

function clickModal() {
  setTimeout(openModal, 3000);
}
clickModal();


html.addEventListener("click", function (e) {
  if (e.target.tagName !== "HTML" || e.target.tagName !== "BODY") {
    if (window.innerWidth > 768) {
      modal.classList.add("_transform");
      modal.classList.remove("_active");
      modalContent.classList.add("_dnone");
    }
    if (window.innerWidth < 768) {
      // modal.classList.add("_active");
      modal.classList.remove("_transform");
    } else {
      modal.classList.remove("_active");
    }
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector(".topBox").classList.add("_active");
  } else {
    document.querySelector(".topBox").classList.remove("_active");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

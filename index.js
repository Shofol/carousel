const randomImageLink = "https://source.unsplash.com/random";

const data = [
  { id: "1", name: "Slide 1" },
  { id: "2", name: "Slide 1" },
  { id: "3", name: "Slide 1" },
  { id: "4", name: "Slide 1" },
  { id: "5", name: "Slide 1" },
  { id: "6", name: "Slide 1" },
  { id: "7", name: "Slide 1" },
  { id: "8", name: "Slide 1" },
  { id: "9", name: "Slide 1" },
  { id: "10", name: "Slide 1" },
  { id: "11", name: "Slide 1" },
  { id: "12", name: "Slide 1" },
  { id: "13", name: "Slide 1" },
  { id: "14", name: "Slide 1" },
  { id: "15", name: "Slide 1" },
  { id: "16", name: "Slide 1" },
  { id: "17", name: "Slide 1" },
  { id: "18", name: "Slide 1" },
  { id: "19", name: "Slide 1" },
  { id: "20", name: "Slide 1" }
];

const wrapper = document.getElementById("wrapper");

for (let i = 0; i < data.length; i++) {
  let div = document.createElement("div");
  div.className = "swiper-slide";
  div.innerHTML = `<span class="name">${i + 1}</span>`;

  //</div>
  // <div class="card"> </div>
  // <div class="img-container">
  // <img src=${data[i].image} alt=${data[i].name} />

  wrapper.append(div);
}

// <!-- Initialize Swiper -->

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  speed: 1000,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
      slidesPerGroup: 3
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

document.getElementById("next-control").addEventListener("mouseover", () => {
  swiper.slideNext();
});

document.getElementById("prev-control").addEventListener("mouseover", () => {
  swiper.slidePrev();
});

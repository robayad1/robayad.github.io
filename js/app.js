



/* ==== My Skills Counter ==== */
const numbers = document.querySelectorAll('.number');
const svgEl = document.querySelectorAll('svg circle');
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if(counters[index] === parseInt(number.dataset.num)){
            clearInterval(counters[index]);
        }else{
            counters[index] += 1;
            number.innerHTML = counters[index] + "%";
            svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100));
        }
    }, 20);
}); 

/* ==== My Skills Slider ==== */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

/* ==== My Project Slider ==== */
var swiperPro = new Swiper(".mySwiperPro", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 1,
      slidesPerView: 3,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
       navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
    });
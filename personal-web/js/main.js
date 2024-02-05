
document.addEventListener("DOMContentLoaded", function () {

  const targetElement = document.querySelector(".intro-items");

  function handleScroll() {
    const rect = targetElement.getBoundingClientRect();
    
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      const images = document.querySelectorAll(".intro-items .intro-item");

      const tl = gsap.timeline();

      images.forEach((image, index) => {
        image.style.display='block'
        console.log(image);
        tl.fromTo(
          image,
          { x: "120%", opacity: 0, delay: index * 0, width: '60%' },
          { x: "0%", opacity: 1, width: "100%" }
        );
      });

      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  
  const experiences = document.querySelectorAll(".experience-item");
  const experiencetl = gsap.timeline();

  experiences.forEach((image, index) => {
    experiencetl.fromTo(
      image,
      { x: "120%", opacity: 0, delay: index * 0, width: '100%' },
      { x: "0%", opacity: 1, width: "100%" }
    );
  });


  var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed:1000,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
  });
  
});












var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
    delay:1500,
    disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1, 
      },
      1140: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".featured-sliders", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
    delay:7500,
    disableOnInteraction:false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      450: {
        slidesPerView: 1,
       
      },

      768: {
        slidesPerView: 2,
       
      },

      1024: {
        slidesPerView: 4,
        
      },
    },
  });

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:8,
    loop:true,
    centeredSlides:true,
    autoplay:{
    delay:10500,
    disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      450: {
        slidesPerView: 1,
       
      },

      768: {
        slidesPerView: 2,
       
      },

      1024: {
        slidesPerView: 3,
        
      },
    },
  });


  
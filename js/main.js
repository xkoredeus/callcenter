$('.rev__cnt').owlCarousel({
      nav: true,
      dots: false,
      items: 3,
      loop: false,
      margin: 20,
      navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 2
        },
        768 : {
            items: 3
        }
      }
});
$('.map__bottom').slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: 'unslick',
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: 'map__dots',
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        dotsClass: 'map__dots',
      }
    }
  ]
});

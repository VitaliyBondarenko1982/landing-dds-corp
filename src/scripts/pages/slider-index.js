$('.products__list').slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: 'unslick',
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dotsClass: 'products__dots',
      }
    }
  ]
});

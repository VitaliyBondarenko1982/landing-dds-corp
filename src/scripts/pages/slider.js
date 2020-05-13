$('.description__list').slick({
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
        slidesToShow: 1,
        dotsClass: 'description__dots',
      }
    }
  ]
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu, .header__form").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
  });
});

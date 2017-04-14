/*
$(".has_a_sub>a").click(function(){
  $(this).next().slideToggle(300);
})
*/

/*
var win_width = $(window).width();
/* вводим переменную 
console.log($(window).width()); 
/* выводим переменную в лог 
if(win_width<980){
  console.log("Этот экран меньше 980");
  $(".has_a_sub>a").click(function(event){
    event.preventDefault();
    $(this).next().slideToggle(300);
});
}
else {
  console.log("Этот экран больше 980");
}
$(".mobile_menu").click(function () {
  $(".menu").slideDown(300);
  $(".mobile_menu_back").fadeIn(300);
});

$(".mobile_menu_back, .close").click(function () {
  $(".menu").slideUp(300);
  $(".sub_menu").slideUp(300);
  $(".mobile_menu_back").fadeOut(300);

});
$(".search>.fa-search").click(function () {
  $(".search_block").fadeToggle(300);
});
*/
$(".slider_1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
$(".slider_2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
});
$(".slider_3").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
});
$(".slider_4").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
});
$(".slider_5").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
});
$(".slider_6").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
});

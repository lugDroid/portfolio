$(document).ready(function() {
      $(".panel").css("min-height", $(window).height() - 50);
});

$(window).resize(function() {
      $(".panel").css("min-height", $(window).height() - 50);
});

$(".navbar li").click(function() {
      $(".navbar li").addClass("active").siblings().removeClass("active");
});

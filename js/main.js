$(".btn-nav").on("click", function () {
  $(".mobile-sidebar").animate({
    width: "toggle",
  });
});
$(".close-menu").on("click", function () {
  $(this).closest(".mobile-sidebar").animate({
    width: "toggle",
  });
});
$(".close").on("click", function () {
  $(this).closest(".sub-header").animate({
    height: "toggle",
  });
});
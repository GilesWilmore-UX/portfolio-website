console.log("Welcome to the G man Wilmore's portolio site muchacho")
$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});

$(".menu").click(function() {
  $(".menu").toggleClass("active");
  $(".navbar-menu").toggleClass("active");
});

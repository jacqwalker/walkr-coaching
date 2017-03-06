function showNavBar(e) {
  e.preventDefault();
  $(".nav-header").toggleClass("visible");
}

$(".nav-icon").click(showNavBar);

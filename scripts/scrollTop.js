$(function() {
  $(window).on("scroll", function (){
    var floater = $("#floater")
    var activeClass = "show"
    var scroll = window.scrollY
    if (window.scrollY > 900) {
      floater.addClass(activeClass);
    } else {
      floater.removeClass(activeClass);
    }
  });
});

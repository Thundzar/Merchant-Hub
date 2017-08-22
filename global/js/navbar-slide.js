$("#navbar-button-open").click(function() {
  $(".site-navbar").removeClass("navbar-slidein");
  $(".site-navbar").addClass("navbar-slideout");
});

$("#navbar-button-close").click(function(){
  $(".site-navbar").removeClass("navbar-slideout");
  $(".site-navbar").addClass("navbar-slidein");
});

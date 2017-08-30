// Navbar Slider Animation Classes //

$("span#navbarOpen").click(function() {
  $(".site-navbar").removeClass("navbar-slidein");
  $(".site-navbar").addClass("navbar-slideout");
  
  console.log("Open");
});

$("span#navbarClose").click(function(){
  $(".site-navbar").removeClass("navbar-slideout");
  $(".site-navbar").addClass("navbar-slidein");
  
  console.log("Close");
});

console.log("Hello");

// Navbar Slider Animation Classes //

$("span#navbarOpen").click(function() {
  console.log("Open");
});

$("span#navbarClose").click(function(){
  $(".site-navbar").removeClass("navbar-slideout");
  $(".site-navbar").addClass("navbar-slidein");
  
  console.log("Close");
});

console.log("Hello");

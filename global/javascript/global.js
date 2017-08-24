// Navbar Slider Animation Classes //

$("span#navbar-button-open").click(function() {
  $(".site-navbar").removeClass("navbar-slidein");
  $(".site-navbar").addClass("navbar-slideout");
  
  console.log("Open");
});

$("span#navbar-button-close").click(function(){
  $(".site-navbar").removeClass("navbar-slideout");
  $(".site-navbar").addClass("navbar-slidein");
  
  console.log("Close");
});

console.log("Hello");

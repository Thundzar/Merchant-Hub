// Navbar Slider Animation Classes //

$("span#navbarOpen").click(function() {
  $(".site-navbar").toggle("navbar-slideout");
  
  console.log("Open");
});

$("span#navbarClose").click(function(){
  $(".site-navbar").toggle("navbar-slideout");
  
  console.log("Close");
});

console.log("Hello");

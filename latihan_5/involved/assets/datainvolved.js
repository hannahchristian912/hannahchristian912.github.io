function openNav() {
  document.getElementById("mySidenav").style.width = temp;
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

var x = window.matchMedia("max-width: 414px")
var temp

function myFunction(x) {
  if (x.matches) { 
   temp = "250px"
  } else {
    temp = "414px"
  }
}

closeNav()

myFunction(x) 
x.addListener(myFunction)

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
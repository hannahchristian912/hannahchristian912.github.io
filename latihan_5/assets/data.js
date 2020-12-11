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
   temp = "200px"
  } else {
    temp = "414px"
  }
}

closeNav()

myFunction(x) 
x.addListener(myFunction)


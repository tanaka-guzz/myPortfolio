console.log("working");

function show(){
    var submenu = document.getElementById("main-nav-sub");
    submenu.style.visibility = "visible";
    console.log("mouse over");
}

window.onclick = function(event) {
  if (!event.target.matches('#products-nav') && !event.target.matches('#main-nav-sub') ) {
    var submenu = document.getElementById("main-nav-sub");
    submenu.style.visibility = "hidden";
  }
}
var manuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
// var menu = document.getElementById("menu");
sideNav.style.right = "-250px"
menuBtn.onclick = function(){
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0px"
    }
    else{
        sideNav.style.right ="-250px"
    }
}

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })

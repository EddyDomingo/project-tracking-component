console.log("hello Eddy")
var nav = document.getElementsByTagName("NAV");
var hamgurger = document.getElementById("hamburger");
hamburger.onclick = function(){navChange()};

function navChange(){
    
    var i;
    for (i = 0; i < nav.length; i++) {
        if ( nav[i].style.visibility == 'hidden'){
         nav[i].style.visibility = "visible";
        }else{
            nav[i].style.visibility = "hidden";
        }
     }
}

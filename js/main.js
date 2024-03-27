// Personal Website
// ● AUTHOR: Marina Amorim Ananias
// ● DATE: July, 2023
// ● ACKNOWLEDGEMENTS/CODE INSPIRATION: 
//     Loading sound wave: https://codepen.io/yomateo/pen/ypbNrJ
//     Carousel: https://codepen.io/dcode-software/pen/BaRMvJo
//     Scrow down arrow: https://codepen.io/matthewhirsch/pen/qOxmoz
//     Scrow down reveal animation: https://codepen.io/alvarotrigo/pen/PoKamZy

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
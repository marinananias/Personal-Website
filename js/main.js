// Personal Website
// ● AUTHOR: Marina Amorim Ananias
// ● DATE: July, 2023
// ● ACKNOWLEDGEMENTS/CODE INSPIRATION: 
//     Loading sound wave: https://codepen.io/yomateo/pen/ypbNrJ
//     Carousel: https://codepen.io/dcode-software/pen/BaRMvJo
//     Scrow down arrow: https://codepen.io/matthewhirsch/pen/qOxmoz
//     Scrow down reveal animation: https://codepen.io/alvarotrigo/pen/PoKamZy

document.querySelectorAll(".track").forEach((track) => {
    const slides = track.querySelectorAll(".track__slide");
    const buttonsHtml = Array.from(slides, () => {
      return `<span class="track__button"></span>`;
    });
  
    track.insertAdjacentHTML(
      "beforeend",
      `
          <div class="track__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = track.querySelectorAll(".track__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the slides
        slides.forEach((slide) =>
          slide.classList.remove("track__slide--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("track__button--selected")
        );
  
        slides[i].classList.add("track__slide--selected");
        button.classList.add("track__button--selected");
      });
    });
  
    // Select the first item on page load
    slides[0].classList.add("track__slide--selected");
    buttons[0].classList.add("track__button--selected");
  });

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
  
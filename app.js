const play = document.querySelector('button');
const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_tiviyc3p.json' 
});

play.addEventListener('click', () =>{
    animItem.goToAndPlay(0,true);
})



const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-menu");
    const navlinks = document.querySelector("nav-links");
    burger.addEventListener('click',()=>{
      let number = Number(this.scrollY);
      if(number === 0){
      nav.classList.toggle("appear");
      }
      else{
        nav.classList.toggle("appear-sticky");
      }
      burger.classList.toggle("toggle");
    })
  }
  navSlide();
 
  // sticky navbar

  window.addEventListener("scroll", function(){
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-menu");
    var navbar = document.querySelector("nav");
    var grid = document.querySelector(".grid");
    var logo = document.querySelector(".nav-logo");
    navbar.classList.toggle("nav-sticky", window.scrollY > 1);
    grid.classList.toggle("grid-sticky", window.scrollY > 1);
    logo.classList.toggle("logo-sticky", window.scrollY > 1);
  })

  // carousel

  document.querySelectorAll(".hcarousel").forEach(hcarousel =>{
    const items = hcarousel.querySelectorAll(".hcarousel-item");
    const buttonsHtml = Array.from(items , ()=>{
      return `<span class="hcarousel-btn"></span>`;
    });
    hcarousel.insertAdjacentHTML("beforeend",`
      <div class="hcarousel-nav">
      ${buttonsHtml.join("")}
    `);
    const buttons = hcarousel.querySelectorAll(".hcarousel-btn");
    buttons.forEach((button,i) => {
      button.addEventListener("click", () =>{
        items.forEach(item => item.classList.remove("hcarousel-item-selected"));
        buttons.forEach(button => button.classList.remove("hcarousel-btn-selected"));
        items[i].classList.add("hcarousel-item-selected");
        button.classList.add("hcarousel-btn-selected");
      });
    });
    items[0].classList.add("hcarousel-item-selected");
    buttons[0].classList.add("hcarousel-btn-selected");
  });

 const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}


const handleMoveToNextSlide = function(e) {
    hideAllSlides();
  
    // check if last slide has been reached
    if (position === numberOfSlides - 1) {
        position = 0; // go back to first slide
    } else {
        // move to next slide
        position++;
    }
    // make current slide visible
    slides[position].classList.add("carousel-item-visible");
  
    // update dot to represent current slide
    dots[position].classList.add("selected-dot");
    dots[position].checked = true;
}

const handleMoveToPrevSlide = function(e) {
    hideAllSlides();
    
    // check if we're on the first slide
    if (position === 0) {
        position = numberOfSlides - 1; // move to the last slide
    } else {
        // move back one
        position--;
    }
    // make current slide visible
    slides[position].classList.add("carousel-item-visible");
  
    // update dot to represent current slide
    dots[position].classList.add("selected-dot");
    dots[position].checked = true;
}

// listen for slide change events
nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);
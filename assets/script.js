// ARRAY SLIDER
const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "slide2.jpg",
	  tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];

// VARIABLES
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bulletPoints = document.querySelector(".dots");
const totalSlide = slides.length;
let counterSlide = 0;

// BULLET POINTS
for (let index = 0; index < totalSlide; index++) {
	const dot = document.createElement("div"); //create element div dot
	bulletPoints.appendChild(dot); // Connect child element dot width parent element bulletPoints (= dots)
	dot.classList.add("dot"); // For each div dot, add class CSS
	if (index === 0) { // Condition to activate class CSS on the first bullet point during the page load
	  dot.classList.add("dot_selected");
	}
  }

// EVENT LISTENERS
arrowLeft.addEventListener("click", () => {
	changeSlide(-1);
	console.log("Click on the left arrow");
});

arrowRight.addEventListener("click", () => {
	changeSlide(1);
	console.log("Click on the right arrow");
});

// MAIN FUNCTION
function changeSlide(direction) { // Main function -> eventListener
  counterSlide = direction + counterSlide; // Depend of the button clicked, add 1 or -1 to the counterSlide to define the index

  if (counterSlide < 0) { // Condition to activate infite scroll
    counterSlide = totalSlide - 1;
  }
  if (counterSlide >= totalSlide) {
    counterSlide = 0;
  }
  imageSlide(counterSlide);
  textSlide(counterSlide);
  currentBulletPoint(counterSlide);
}

// SUB FUNCTION
function imageSlide(counterSlide) { // Subfonction to change the slide image
  let imageBanner = document.querySelector(".banner-img");
  imageBanner.src = "./assets/images/slideshow/" + slides[counterSlide].image;
}

function textSlide(counterSlide) { // Subfonction to change the slide text
  let textBanner = document.querySelector("p");
  textBanner.innerHTML = slides[counterSlide].tagLine;
}

function currentBulletPoint(counterSlide) { // Subfonction to change the current bullet point
  let inactiveDot = document.querySelector(".dot_selected");
  inactiveDot.classList.remove("dot_selected");
  let activeDot = bulletPoints.children[counterSlide];
  activeDot.classList.add("dot_selected");
}



// ORIGINAL CODE WITHOUT FUNCTIONS
// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

// // VARIABLES 
// const image = document.querySelector(".banner-img");
// const arrowLeft = document.querySelector(".arrow_left");
// const arrowRight = document.querySelector(".arrow_right");
// const sliderText = document.querySelector(".slider-text");
// const totalSlide = slides.length;
// let counterSlide = 0;

// // BULLET POINTS 
// const dots = document.querySelector(".dots");
// for (let i = 0; i < totalSlide; i++) {
//   const dot = document.createElement("div");  //create element div dot
//   dot.className ="dot"; // Name class div dot
//   dots.appendChild(dot); //Connect parent dots with child dot
// }

// // ARROWS
// const dot = document.querySelectorAll(".dot");
// dot[0].classList.add("dot_selected"); // Specify full dot to index = 0

// arrowLeft.addEventListener("click", () => { // Event listener arrow left
// 	dot[counterSlide].classList.remove("dot_selected"); // remove actual full dot
// 	if (counterSlide === 0) { // Function slide arrow
// 		image.src = "./assets/images/slideshow/" + slides[totalSlide - 1].image; // Selection image in reverse order
// 		sliderText.innerHTML = slides[totalSlide - 1].tagLine; 
// 		dot[totalSlide-1].classList.add("dot_selected"); // Add new full dot
// 		counterSlide = totalSlide - 1;
// 	}
// 	else {
// 		image.src = "./assets/images/slideshow/" + slides[counterSlide - 1].image;
// 		sliderText.innerHTML = slides[counterSlide- 1].tagLine;
// 		dot[counterSlide-1].classList.add("dot_selected");
// 		counterSlide = counterSlide - 1;
// 	}
// })

// arrowRight.addEventListener("click", () => { // Event listener arrow right
// 	dot[counterSlide].classList.remove("dot_selected"); // remove actual full dot
// 	if (counterSlide === totalSlide - 1) { // Function slide arrow
// 		image.src = "./assets/images/slideshow/" + slides[0].image; // Selection image in normal order
// 		sliderText.innerHTML = slides[0].tagLine;
// 		dot[0].classList.add("dot_selected"); // Add new full dot
// 		counterSlide = 0;
// 	}

// 	else {
// 		image.src = "./assets/images/slideshow/" + slides[counterSlide + 1].image;
// 		sliderText.innerHTML = slides[counterSlide + 1].tagLine;
// 		dot[counterSlide +1].classList.add("dot_selected");
// 		counterSlide = counterSlide +1;
// 	}
// })

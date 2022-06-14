const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("div.slides img");

let currentSlide = 0;
let z = 1;

slideArea.addEventListener("click", () => {
	currentSlide += 1;
	z += 1;

	if (currentSlide >= images.length) {
		currentSlide = 0;
	}

	images.forEach((image) => {
		image.style.animation = "";
	});

	images[currentSlide].style.zIndex = z;
	images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", () => {
	images.forEach((image) => {
		const x = 25 * Math.floor(Math.random() * 5) - 50;
		const y = 25 * Math.floor(Math.random() * 5) - 50;

		image.style.transform = `translate(${x}px, ${y}px)`;
	});
});

slideArea.addEventListener("mouseout", () => {
	images.forEach((image) => {
		image.style.transform = "translate(0px, 0px)";
	});
});

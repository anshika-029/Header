
const slides = document.querySelectorAll(".slide");
let counter = 0; // Initialize counter to 0 for the first image

// Set the initial position of slides
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++;
    slideImage();
};

const goPrev = () => {
    counter--;
    slideImage();
};

const slideImage = () => {
    // Handle loop for counter
    if (counter < 0) {
        counter = slides.length - 1; // Move to last slide when counter is negative
    } else if (counter >= slides.length) {
        counter = 0; // Move to first slide when counter exceeds number of slides
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Optional: Auto slide after every 3 seconds
setInterval(goNext, 10000);

import { motion, useAnimation } from 'framer-motion';
const images = document.querySelectorAll(".w-full");
let currentImage = 0;

function slideImages() {
    const nextImage = (currentImage + 1) % images.length;
    images[currentImage].style.transform = "translateX(-100%)";
    images[nextImage].style.transform = "translateX(0)";
    currentImage = nextImage;
}

setInterval(slideImages, 3000);
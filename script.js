const track = document.querySelector(".carousel-track")
const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

let currentIndex = 0;
const totalSlides = slides.length

function updateCarousel(){
    track.style.transform = `translateX(-${currentIndex * 100}%)`
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides
    updateCarousel()
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    updateCarousel()
})
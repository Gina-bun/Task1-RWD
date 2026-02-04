const carouselItems = document.querySelector(".carousel-items")
const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

let currentIndex = 0;
const totalSlides = slides.length

function updateCarousel(){
    carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides
    updateCarousel()
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    updateCarousel()
})
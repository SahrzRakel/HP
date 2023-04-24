const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    // 現在のスライドを非アクティブにし、次のスライドをアクティブにする
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");

    // 最後のスライドを表示している場合、最初のスライドに戻す
    if (currentSlide === 0) {
        slides[slides.length - 1].classList.remove("active");
        slides[1].classList.remove("active");
        slides[0].classList.add("active");
    } else {
        slides[currentSlide - 1].classList.remove("active");
        slides[currentSlide + 1].classList.remove("active");
        slides[currentSlide].classList.add("active");
    }
}
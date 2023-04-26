// 画像を右から左に流す
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// 初期スライド位置の設定
slides[currentSlide].classList.add('active');
slides[currentSlide].style.left = '0';

// 3秒ごとにスライドを移動する
setInterval(moveSlides, 3000);

function moveSlides() {
    // 現在のスライドを非アクティブにし、次のスライドをアクティブにする
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');

    // スライドの位置を変更する
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.left = '0';
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.style.left = '0%';
        } else {
            slide.style.left = '-100%';
        }
    });
}
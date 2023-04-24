const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    // ���݂̃X���C�h���A�N�e�B�u�ɂ��A���̃X���C�h���A�N�e�B�u�ɂ���
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");

    // �Ō�̃X���C�h��\�����Ă���ꍇ�A�ŏ��̃X���C�h�ɖ߂�
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
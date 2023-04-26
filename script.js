// �摜���E���獶�ɗ���
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// �����X���C�h�ʒu�̐ݒ�
slides[currentSlide].classList.add('active');
slides[currentSlide].style.left = '0';

// 3�b���ƂɃX���C�h���ړ�����
setInterval(moveSlides, 3000);

function moveSlides() {
    // ���݂̃X���C�h���A�N�e�B�u�ɂ��A���̃X���C�h���A�N�e�B�u�ɂ���
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');

    // �X���C�h�̈ʒu��ύX����
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
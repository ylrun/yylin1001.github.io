document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const animatedText = document.querySelector('.animated-text');

    toggleBtn.addEventListener('click', () => {
        if (animatedText.style.animation) {
            animatedText.style.animation = '';
        } else {
            animatedText.style.animation = 'text-animate 2s linear infinite';
        }
    });

    // Image Slider
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('visible');
    }

    setInterval(showNextSlide, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const animatedText = document.querySelector('.animated-text');

    toggleBtn.addEventListener('click', function () {
        animatedText.classList.toggle('fadeIn');
    });

    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide img');

    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides.clientWidth;
        slides.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideImages.length;
        showSlide(currentIndex);
    }, 3000);
});

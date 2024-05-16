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
});

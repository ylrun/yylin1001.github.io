document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect for Skills
    const skills = [
        "Python",
        "Data Analysis",
        "Web Dev",
        "Machine Learning",
        "SQL",
        "Java",
        "Data Engineering"
    ];

    const typingText = document.querySelector('.typing-text');
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Typing and deleting speed
    const pauseTime = 1000; // Pause time before switching to the next skill

    function type() {
        const currentSkill = skills[skillIndex];
        const displayText = isDeleting
            ? currentSkill.substring(0, charIndex--)
            : currentSkill.substring(0, charIndex++);

        typingText.textContent = displayText;

        if (!isDeleting && charIndex === currentSkill.length) {
            setTimeout(() => (isDeleting = true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length; // Cycle through skills
        }

        const nextSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;
        setTimeout(type, nextSpeed);
    }

    type();

    // Navbar Toggle for Smaller Screens
    const toggleBtn = document.getElementById('toggle-btn');
    const navMenu = document.querySelector('nav ul');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Automatic Slider for Featured Projects
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide img');

    let currentIndex = 0;

    if (slides && slideImages.length > 0) {
        function showSlide(index) {
            const slideWidth = slides.clientWidth;
            slides.style.transform = `translateX(${-index * slideWidth}px)`;
        }

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slideImages.length;
            showSlide(currentIndex);
        }, 3000);
    }

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});


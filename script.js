document.addEventListener('DOMContentLoaded', () => {
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
    let fullTextDisplayed = false;
    const typingSpeed = 100; // Typing and deleting speed
    const pauseTime = 1000; // Pause time before moving to the next skill

    function type() {
        if (!fullTextDisplayed) {
            const currentSkill = skills[skillIndex];
            const displayText = isDeleting
                ? currentSkill.substring(0, charIndex--)
                : currentSkill.substring(0, charIndex++);

            typingText.textContent = displayText;

            if (!isDeleting && charIndex === currentSkill.length) {
                setTimeout(() => (isDeleting = true), pauseTime);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                skillIndex++;

                if (skillIndex === skills.length) {
                    fullTextDisplayed = true; // Stop animation after the full list
                    typingText.textContent = skills.join(" | ");
                    return;
                }
            }
        }

        const nextSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;
        setTimeout(type, nextSpeed);
    }

    type();
});


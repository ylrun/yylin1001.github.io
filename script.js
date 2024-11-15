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

    const typingContainer = document.querySelector('.typing-container');
    const typingText = document.createElement('span');
    typingText.classList.add('typing-text');
    typingContainer.appendChild(typingText);

    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let fullTextDisplayed = false;
    const typingSpeed = 100;
    const pauseTime = 1000;

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
                    fullTextDisplayed = true;
                    displayAllSkills();
                    return;
                }
            }
        }

        const nextSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;
        setTimeout(type, nextSpeed);
    }

    function displayAllSkills() {
        typingContainer.innerHTML = ''; // Clear the typing text
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill-item');
            skillElement.textContent = skill;
            typingContainer.appendChild(skillElement);
        });
    }

    type();
});



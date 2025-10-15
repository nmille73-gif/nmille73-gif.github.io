document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((section) => {
        if (section.id !== 'what') {
            section.style.display = 'none'; // Hides all sections except #what
        } else {
            section.style.display = 'block'; // Ensures #what is visible
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener(('click'), (event) => {
            event.preventDefault(); // Stop the link from acting as a hash link

            const targetId = link.getAttribute('href');
            sections.forEach((section) => {
                section.style.display = "none";
            });
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});

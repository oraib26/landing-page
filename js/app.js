document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

    navList.innerHTML = '';

    // Loop through each section to create a new nav item
    sections.forEach((section, index) => {
        const navItemText = section.getAttribute('data-nav');
        const navItemId = section.id;

        // Create a list item for the nav
        const listItem = document.createElement('li');
        
        // Create a link element
        const link = document.createElement('a');
        link.href = `#${navItemId}`;
        link.className = 'menu__link';
        link.textContent = navItemText;

        // Append the link to the list item, and the list item to the navbar
        listItem.appendChild(link);
        navList.appendChild(listItem);

        // Add event listener for smooth scroll on click
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById(navItemId).scrollIntoView({ behavior: 'smooth' });

            // Remove 'active' class from all navbar links
            const navbarLinks = document.querySelectorAll('.menu__link');
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });

    function makeActive() {
        let found = false; // This flag will indicate if we've found the active section yet
        const navbarLinks = document.querySelectorAll('.menu__link');

        // We use reverse loop to prioritize the first section in view from top to bottom
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            // Check if section is in the viewport
            if (rect.top <= 150 && rect.bottom >= 150 && !found) {
                // Add 'active' class to the section and corresponding nav link
                section.classList.add('active');
                navbarLinks[i].classList.add('active');
                found = true; // Set found flag
            } else {
                // Remove 'active' class from the section and corresponding nav link
                section.classList.remove('active');
                navbarLinks[i].classList.remove('active');
            }
        }
    }
    window.addEventListener('scroll', makeActive);
});

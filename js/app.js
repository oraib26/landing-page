/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


/////////// The soluation :


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');
    const navbarLinks = document.querySelectorAll('.menu__link');


    navList.innerHTML = '';

    // Loop through each section to create a new nav item
    sections.forEach(section => {
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
        });
    });

    function makeActive() {
        let found = false; // This flag will indicate if we've found the active section yet

        // We use reverse loop to prioritize the first section in view from top to bottom
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            // Check if section is in the viewport
            if (rect.top <= 150 && rect.bottom >= 150 && !found) {
                // Add 'active' class to the section and corresponding nav link
                section.classList.add('your-active-class');
                navbarLinks[i].classList.add('active');
                found = true; // Set found flag
            } else {
                // Remove 'active' class from the section and corresponding nav link
                section.classList.remove('your-active-class');
                navbarLinks[i].classList.remove('active');
            }
        }
    }
    window.addEventListener('scroll', makeActive);
});




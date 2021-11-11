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
const allSections = document.querySelectorAll("section");
const navUl = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Function to distinguish the section in view
function isInView(section) {
    // get the relative position of section
    const rect = section.getBoundingClientRect();

    // get windows height and width
    // to check which section is in view.
    let windowsHeight = window.innerHeight || document.documentElement.clientHeight;

    // write logic with top and bottom.
    return (
        rect.top <= 0 &&
        rect.bottom > 0
    );
}

function addActive(section) {
    section.classList.add("active");
}

function removeActive(section) {
    navUl.classList.remove("active");
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (section of allSections) {
        // get the section name to add link at each section
        // here is a problem "id"
        const sectionLink = section.id;

        // get get data-nav to set it between <a>
        const sectionName = section.dataset.nav;

        // make li elem to add at ul elem
        const liElem = document.createElement("li");
        liElem.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`

        // add the li elem to ul as a child
        navUl.appendChild(liElem);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav();

// Scroll to section on link click

// Set sections as active



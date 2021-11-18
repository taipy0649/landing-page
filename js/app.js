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
const allMenu__linkClass = document.getElementsByClassName('menu__link');

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
    section.className = "";
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
        liElem.innerHTML = `<a class="menu__link" href="">${sectionName}</a>`;

        // add the li elem to ul as a child
        navUl.appendChild(liElem);
    }
}

// Add class 'active' to section when near top of viewport
function manageActive() {
    for (const section of allSections) {
        if (isInView(section)) {
            addActive(section);
        } else {
            removeActive(section);
        }
    }
}


// Scroll to anchor ID using scrollTO event
function scrollToTargetSection() {
    for (let index = 0; index < allMenu__linkClass.length; index++) {
        allMenu__linkClass[index].addEventListener('click', function(event) {
            event.preventDefault()
            allSections[index].scrollIntoView({behavior: "smooth"});
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav();

// Scroll to section on link click
scrollToTargetSection();

// Set sections as active
window.addEventListener("scroll", manageActive);


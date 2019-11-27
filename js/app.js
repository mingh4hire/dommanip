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
var menu = ['Section1', 'Section2', 'Section3'];
// Scroll to section on link click
function scrollto() {

}
// Set sections as active
(function() {
    document.querySelector('.activesection').className = 'active';
    var navbar = [{
            color: 'green',
            text: 'Section 1',
            target: '#section1'
        },
        {
            color: 'blue',
            text: 'Section 2',
            target: '#section2'
        },
        {
            color: 'red',
            text: 'Section 3',
            target: '#section3'
        }

    ];
    const makeactive = function(el) {
        const lists = document.querySelectorAll('#navbar__list li');
        for (var i = 0; i < document.querySelectorAll('#navbar__list li').length; i++) {
            const val = lists[i].classList.value;
            console.log(val);
            lists[i].classList.remove("activenav");
        }
        el.target.classList.add("activenav");

    }
    navbar.forEach(x => {
        const navbarlist = document.querySelector('#navbar__list');
        const li = document.createElement('li');
        li.innerHTML = `<a href="${x.target}">${x.text}</a>`;
        li.onclick = makeactive;
        navbarlist.appendChild(li);
    });


})();
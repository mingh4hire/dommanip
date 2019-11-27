(function() {
    // Build menu 

    document.querySelector('.activesection').className = 'active';
    //array of navbar list items to be used to populate the nav unorder list
    var navbar = [{
            text: 'Section 1',
            target: '#section1'
        },
        {
            text: 'Section 2',
            target: '#section2'
        },
        {
            text: 'Section 3',
            target: '#section3'
        }

    ];
    /*
        makeactive event handler used to handle click event to the list item 
    */
    const makeactive = function(el) {
            const lists = document.querySelectorAll('#navbar__list li');
            lists.forEach(x => console.log(x));
            //remove all class activenav to the list items in nav
            for (var i = 0; i < lists.length; i++) {
                lists[i].classList.remove("activenav");
            }
            //add the activenav class to the clicked on list item 
            el.target.parentElement.classList.add("activenav");

        }
        //populate the navbar with the list items to click on 
    navbar.forEach(x => {
        const navbarlist = document.querySelector('#navbar__list');
        const li = document.createElement('li');
        li.innerHTML = `<a href="${x.target}">${x.text}</a>`;
        li.onclick = makeactive;
        navbarlist.appendChild(li);
    });


})();
(function() {
    // Build menu 

    //array of navbar list items to be used to populate the nav unorder list
    // data-nav="Section 1"

    /*
        makeactive event handler used to handle click event to the list item 
    */
    const makeactive = function(el) {
        const lists = document.querySelectorAll('#navbar__list li');
        //remove all class activenav to the list items in nav
        for (let i = 0; i < lists.length; i++) {
            lists[i].classList.remove("activenav");

            if (lists[i].attributes['data-nav'].value === el) {
                lists[i].classList.add("activenav");
            }

        }

        /*
            add and remove class "activesection" to the appropriate section elements;
        */
        const listsofsecs = document.querySelectorAll("section");
        listsofsecs.forEach(x => {
            x.classList.remove('activesection');

            if (x.attributes['data-nav'].value === el) {
                x.classList.add('activesection');
                const bodyRect = document.body.getBoundingClientRect();
                elemRect = x.getBoundingClientRect();
                const offset = elemRect.top - bodyRect.top;

                scrollTo(0, offset)
            }
        });
        //add the activenav class to the clicked on list item 

    }


    //populate the navbar with the list items to click on 

    var navbarsecs = document.querySelectorAll("section");
    const navbarlist = document.querySelector('#navbar__list');

    for (let i = 0; i < navbarsecs.length; i++) {
        var datanav = navbarsecs[i].attributes['data-nav'].value;
        const li = document.createElement('li');
        li.setAttribute('data-nav', datanav);
        li.innerHTML = datanav;
        const nav = datanav;

        li.addEventListener('click', function() {
            makeactive(nav);
        });
        navbarlist.appendChild(li);
    }


})();
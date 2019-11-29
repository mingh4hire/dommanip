(function() {
    /* 
        load y values of all sections
    */
    const secpos = [];
    const secs = document.querySelectorAll('section');
    for (let i = 0; i < secs.length; i++) {
        const name = secs[i].attributes['data-nav'].value;
        const top = secs[i].getBoundingClientRect().top;
        const doctop = document.body.getBoundingClientRect().top;
        secpos.push({
            name: name,
            y: top - doctop
        });
    }
    //array of navbar list items to be used to populate the nav unorder list
    // data-nav="Section 1"

    /*
        makeactive event handler used to handle click event to the list item 
    */
    const makeactive = function(el, move) {
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
                if (move !== false) { //don't need to change the scroll position if it is a scroll event

                    const bodyRect = document.body.getBoundingClientRect();
                    elemRect = x.getBoundingClientRect();
                    const offset = elemRect.top - bodyRect.top;

                    scrollTo(0, offset)
                }
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
    /* add logic for making the window automatically change 
    the active section on window scroll */
    window.addEventListener('scroll', function(e) {
        const offset = 15;
        for (var i = secpos.length - 1; i >= 0; i--) {
            if (window.scrollY > secpos[i].y - offset) {
                //only call makeactive it is changing the activesection
                const prevsection = this.document.querySelector("section.activesection").attributes["data-nav"].value
                if (prevsection === secpos[i].name) {
                    break;
                }
                makeactive(secpos[i].name, false);
                break;
            }
        }


    });

})();
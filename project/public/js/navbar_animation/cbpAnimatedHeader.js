/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
const cbpAnimatedHeader = (function () {
    let docElem = document.documentElement,
        header = document.querySelector('.cbp-af-header'),
        didScroll = false,
        changeHeaderOn = 300;

    function init() {
        scrollPage();
        window.addEventListener('scroll', function () {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    function scrollPage() {
        const sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'cbp-af-header-shrink');
        }
        else {
            classie.remove(header, 'cbp-af-header-shrink');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();
})();
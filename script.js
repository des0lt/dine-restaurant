window.addEventListener('DOMContentLoaded', () => {

    function addFooter() {
        const footer = document.createElement('footer');
        footer.innerHTML = `
        <article class="logotype">
            <a href="./index.html">
                <img src="./images/logo.svg" alt="logotype dine">
            </a>
        </article>
        <article class="restaurant_info_city">
            <a href="https://www.google.com/maps/search/Marthwaite%2C+Sedbergh%2C+Cumbria">
                <address class="league-spartan-regular">Marthwaite, Sedbergh<br>Cumbria<br></address>
            </a>
            <a href="tel:+00441234567" class="league-spartan-regular">+00 44 123 4567</a>
        </article>
        <article class="restaurant_info_time">
            <p class="league-spartan-regular">OPEN TIMES<br>
            <time>MON - FRI: 09:00 AM - 10:00 PM</time><br>
            <time>SAT - SUN: 09:00 AM - 11:30 PM</time></p>
        </article>
        `
        document.body.appendChild(footer);
    }

    addFooter();

    //slider

    const slideSelectors = document.querySelectorAll('.slider_selector'),
        slideImaged = document.querySelectorAll('.slider img'),
        slideSelectorsParent = document.querySelectorAll('.restaurant_descr_text_selector article'),
        slideSectionsTitle = document.querySelectorAll('.section_slider h2');
        slideSectionsParagraph = document.querySelectorAll('.section_slider p');
        slideWrap = document.querySelector('.section_slider')

    function showImg(selector) {
        selector.classList.add('show');
        selector.classList.remove('hide')
    }

    function hideImg(selector) {
        selector.classList.add('hide');
        selector.classList.remove('show')
    }

    function showText(title, paragraph) {
        title.classList.add('show');
        title.classList.remove('hide');
        paragraph.classList.add('show');
        paragraph.classList.remove('hide');
    }

    function hideText(title, paragraph) {
        title.classList.add('hide');
        title.classList.remove('show');
        paragraph.classList.add('hide');
        paragraph.classList.remove('show');
    }

    slideSelectors.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTo = parseInt(e.target.getAttribute('data-slide-to')) - 1;

            slideImaged.forEach((img, i) => {
                if (i === slideTo) {
                    showImg(img, slideTo);
                    slideSelectorsParent[i].classList.add('active');
                    showText(slideSectionsTitle[i], slideSectionsParagraph[i], i)
                    if (i === 1 || i === 2) {
                        slideWrap.style.gap = '30px';
                    } else {
                        slideWrap.style.gap = '60px';
                    }
                } else {
                    hideImg(img, slideTo);
                    slideSelectorsParent[i].classList.remove('active');
                    hideText(slideSectionsTitle[i], slideSectionsParagraph[i])
                }
            });
        });
    });


    //form

    const increaseBtn = document.querySelector('#increase'),
          decreaseBtn = document.querySelector('#decrease'),
          peopleCount = document.querySelector('#people-count');

    function changeCount(selector) {
        if (selector === 'increase') {
            peopleCount.textContent = +peopleCount.textContent + 1;
        } else {
            if (+peopleCount.textContent > 1) {
                peopleCount.textContent = +peopleCount.textContent - 1;
            }
        }
    }

    increaseBtn.addEventListener('click', (e) => {
        changeCount(e.target.getAttribute('id'))
    })

    decreaseBtn.addEventListener('click', (e) => {
        changeCount(e.target.getAttribute('id'))
    })

})

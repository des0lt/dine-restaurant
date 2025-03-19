
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

//slider

const slideSelectors = document.querySelectorAll('.slider_selector'),
      slideImaged = document.querySelectorAll('.slider img'),
      slideSelectorsParent = document.querySelectorAll('.restaurant_descr_text_selector article')

function showImg(selector, num) {
    console.log(num)
    selector.classList.add('show');
    selector.classList.remove('hide')
}

function hideImg(selector, num) {
    console.log(num)
    selector.classList.add('hide');
    selector.classList.remove('show')
}

slideSelectors.forEach(item => {
    item.addEventListener('click', (e) => {
        const slideTo = parseInt(e.target.getAttribute('data-slide-to')) - 1;

        slideImaged.forEach((img, i) => {
            if (i === slideTo) {
                showImg(img, slideTo);
                slideSelectorsParent[i].classList.add('active')
            } else {
                hideImg(img, slideTo);
                slideSelectorsParent[i].classList.remove('active');
            }
        });
    });
});
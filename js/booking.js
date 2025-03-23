document.addEventListener('DOMContentLoaded', () => {
    //form

    const increaseBtn = document.querySelector('#increase'),
    decreaseBtn = document.querySelector('#decrease'),
    peopleCount = document.querySelector('#people-count');

    function changeCount(selector) {
        if (selector === 'increase' || selector !== 'decrease') {
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
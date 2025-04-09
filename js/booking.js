document.addEventListener('DOMContentLoaded', () => {
    //form

    const increaseBtn = document.querySelector('#increase'),
    decreaseBtn = document.querySelector('#decrease'),
    peopleCount = document.querySelector('#people-count'),
    submitBtn = document.querySelector('#booking_submit');

    const inputs = document.querySelectorAll('input');

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

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        checkForm();
    })

    function checkForm() {
        let dateGroup = document.querySelectorAll('.date-picker_wrap input');
        let timeGroup = document.querySelectorAll('.time-picker_wrap input');
        const dateLabel = document.querySelector('.date-picker div p'),
              timeLabel = document.querySelector('.time-picker div p'),
              nameInput = document.querySelector('input[placeholder="Name"]'),
              nameP = document.querySelector('.name-p'),
              emailInput = document.querySelector('input[placeholder="Email"]'),
              emailP = document.querySelector('.email-p');

        inputs.forEach(input => {
            if (input.value.trim() == '') {
                input.classList.add('error-state');
            } else {
                input.classList.remove('error-state')
            }
        })

        dateLabel.style.display = 'none';
        dateGroup.forEach(input => {
            if (input.classList.contains('error-state')) {
                dateLabel.style.display = 'block';
            }
        })

        timeLabel.style.display = 'none';
        timeGroup.forEach(input => {
            if (input.classList.contains('error-state')) {
                timeLabel.style.display = 'block';
            }
        })

        if (nameInput.classList.contains('error-state')) {
            nameP.style.display = 'block';
        } else {
            nameP.style.display = 'none';
        }
        if (emailInput.classList.contains('error-state')) {
            emailP.style.display = 'block';
        } else {
            emailP.style.display = 'none';
        }
    }
})
document.addEventListener('DOMContentLoaded', () => {
    //form

    const increaseBtn = document.querySelector('#increase'),
          decreaseBtn = document.querySelector('#decrease'),
          peopleCount = document.querySelector('#people-count'),
          submitBtn = document.querySelector('#booking_submit'),
          mounthInput = document.querySelector('#mounth'),
          dayInput = document.querySelector('#day'),
          yearInput = document.querySelector('#year'),
          hoursInput = document.querySelector('#hours'),
          minutesInput = document.querySelector('#minutes'),
          emailInput = document.querySelector('input[placeholder="Email"]'),
          emailFormat = document.querySelector('.email-check');

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

    emailInput.addEventListener("blur", () => {
        const email = emailInput.value.trim();
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailPattern.test(email)) {
            emailInput.classList.add('error-state');
            emailFormat.style.display = 'block';
        } else {
            emailInput.classList.remove('error-state');
            emailFormat.style.display = 'none';
        }
    });

    mounthInput.addEventListener("input", () => {
        let val = mounthInput.value;
        val = val.replace(/\D/g, "");

        if (val !== "") {
            const num = parseInt(val, 10);
            if (num < 1) val = "1";
            else if (num > 12) val = "12";
            else val = String(num);
        }

        mounthInput.value = val;
    });
    mounthInput.addEventListener("blur", () => {
        let val = mounthInput.value;

        if (val.length < 2) {
            val = `0${val}`
        }

        mounthInput.value = val;
    });

    dayInput.addEventListener("input", () => {
        let val = dayInput.value;
        val = val.replace(/\D/g, "");

        if (val !== "") {
            const num = parseInt(val, 10);
            if (num < 1) val = "1";
            else if (num > 31) val = "31";
            else val = String(num);
        }

        dayInput.value = val;
    });
    dayInput.addEventListener("blur", () => {
        let val = dayInput.value;

        if (val.length < 2) {
            val = `0${val}`
        }

        dayInput.value = val;
    });

    yearInput.addEventListener("input", () => {
        let val = yearInput.value;
        val = val.replace(/\D/g, "");

        if (val !== "") {
            const num = parseInt(val, 10);
            if (num < 1) val = "2025";
            else if (num > 2030) val = "2030";
            else val = String(num);
        }

        yearInput.value = val;
    });
    yearInput.addEventListener("blur", () => {
        let val = yearInput.value;

        if (val < 2025) {
            val = `2025`
        }

        yearInput.value = val;
    });

    hoursInput.addEventListener("input", () => {
        let val = hoursInput.value;
        val = val.replace(/\D/g, "");

        if (val !== "") {
            const num = parseInt(val, 10);
            if (num < 0) val = "0";
            else if (num > 23) val = "23";
            else val = String(num);
        }

        hoursInput.value = val;
    });
    hoursInput.addEventListener("blur", () => {
        let val = hoursInput.value;

        if (val.length < 2) {
            val = `0${val}`
        }

        hoursInput.value = val;
    });

    minutesInput.addEventListener("input", () => {
        let val = minutesInput.value;
        val = val.replace(/\D/g, "");

        if (val !== "") {
            const num = parseInt(val, 10);
            if (num < 0) val = "0";
            else if (num > 59) val = "59";
            else val = String(num);
        }

        minutesInput.value = val;
    });
    minutesInput.addEventListener("blur", () => {
        let val = minutesInput.value;

        if (val.length < 2) {
            val = `0${val}`
        }

        minutesInput.value = val;
    });

    function checkForm() {
        let dateGroup = document.querySelectorAll('.date-picker_wrap input');
        let timeGroup = document.querySelectorAll('.time-picker_wrap input');
        const dateLabel = document.querySelector('.date-picker div p'),
              timeLabel = document.querySelector('.time-picker div p'),
              nameInput = document.querySelector('input[placeholder="Name"]'),
              nameP = document.querySelector('.name-p'),
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
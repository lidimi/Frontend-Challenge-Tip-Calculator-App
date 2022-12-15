const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('#people');
const form = document.querySelector('form');
const tipBtns = document.querySelector(".grid-buttons");
const displayError = document.querySelector('.display-error')

const tipAmount = document.querySelector('.tip-amount');
const total = document.querySelector('.total-person');

const customInput = document.querySelector('.custom');

const radioBtnsLabels = document.querySelectorAll('.grid-buttons label');

// GET VALUE OF RADIO BUTTONS

let tipValue = 0;

tipBtns.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
        tipValue = e.target.value
        customInput.value = '0'
    }
})

customInput.addEventListener('input', () => {
    tipValue = 0;
    tipValue = (+customInput.value / 100)
})

// INPUT LISTENERS 

form.addEventListener('input', () => {
    if (peopleInput.value === '0') {
        tipAmount.innerHTML = `$0.00`;
        total.innerHTML = `$0.00`;
        displayError.innerHTML = 'Can\'t be zero';
        peopleInput.style.border = '2px solid rgb(199, 77, 77)'
    } else {
        displayError.innerHTML = '';
        peopleInput.style.border = 'none'
        tipAmount.innerHTML = `$${((billInput.value * tipValue) / peopleInput.value).toFixed(2)}`;
        total.innerHTML = `$${((+billInput.value + (+billInput.value * tipValue)) / +peopleInput.value).toFixed(2)}`
    }
})


//RESET FORM AND DISPLAYED VALUES

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    tipAmount.innerHTML = `$0.00`
    total.innerHTML = `$0.00`
    tipValue = 0;
})


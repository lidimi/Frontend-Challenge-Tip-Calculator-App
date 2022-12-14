const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('#people');
const form = document.querySelector('form');
const tipBtns = document.querySelector(".grid-buttons");


const tipAmount = document.querySelector('.tip-amount');
const total = document.querySelector('.total-person');

let tipValue = 0;

tipBtns.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
        tipValue = e.target.value
    }
})

form.addEventListener('input', () => {
    tipAmount.innerHTML = `$${((billInput.value * tipValue) / peopleInput.value).toFixed(2)}`;
    total.innerHTML = `$${((+billInput.value + (+billInput.value * tipValue)) / +peopleInput.value).toFixed(2)}`
})

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    tipAmount.innerHTML = `$0.00`
    total.innerHTML = `$0.00`
    tipValue = 0;
})
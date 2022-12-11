const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('#people');
const allInputs = document.querySelectorAll('input');
const tipBtns = document.querySelectorAll("input[name='tip']");


const tipAmount = document.querySelector('.tip-amount')
const total = document.querySelector('.total-person');

let tip = 0;

function getTipValue() {
    for (let i = 0; i < tipBtns.length; i++) {
        if (tipBtns[i].checked) {
            tip = tipBtns[i]
        } else {
            tip = 0;
        }
    }
}

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        getTipValue()
        let totalPerson = ((billInput.value * tip.value) + (+billInput.value)) / (peopleInput.value);
        let tipPerson = (billInput.value * tip.value) / (peopleInput.value);

        total.innerHTML = `$${totalPerson.toFixed(2)}`;
        tipAmount.innerHTML = `$${tipPerson.toFixed(2)}`
    })
})
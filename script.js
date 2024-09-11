// Get the balance element
const balanceElement = document.getElementById('balance');

// Get the deposit and withdrawal input fields and buttons
const depositAmountInput = document.getElementById('deposit-amount');
const depositButton = document.getElementById('deposit-button');
const withdrawalAmountInput = document.getElementById('withdrawal-amount');
const withdrawalButton = document.getElementById('withdrawal-button');

// Initialize the balance to $1000
let balance = 1000;

// Update the balance display
function updateBalance() {
    balanceElement.textContent = balance;
}

//  deposit logic
depositButton.addEventListener('click', () => {
    const depositAmount = parseFloat(depositAmountInput.value);
    if (depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
        depositAmountInput.value = '';
    }
});

//  withdrawal logic
withdrawalButton.addEventListener('click', () => {
    const withdrawalAmount = parseFloat(withdrawalAmountInput.value);
    if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
        balance -= withdrawalAmount;
        updateBalance();
        withdrawalAmountInput.value = '';
    } else if (withdrawalAmount > balance) {
        alert(' Insufficient funds!');
    }
});

// Initialize the balance display
updateBalance();
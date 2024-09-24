
let totalBalance = 1000; 
let donationHistory = []; 

function toggleSection(section) {
    const donateSection = document.querySelector('.donate');
    const historySection = document.querySelector('.history');
    const donateButton = document.getElementById('donateButton');
    const historyButton = document.getElementById('historyButton');

    if (section === 'donate') {
        donateSection.style.display = 'block';
        historySection.style.display = 'none';
        donateButton.classList.add('active');
        historyButton.classList.remove('active');
    } else {
        donateSection.style.display = 'none';
        historySection.style.display = 'block';
        donateButton.classList.remove('active');
        historyButton.classList.add('active');
        displayHistory(); 
    }
}

window.onload = function () {
    toggleSection('donate'); 
}



function validateDonation(event, card) {
    event.preventDefault(); 
    const donationInput = document.getElementById(`donate-input-${card}`).value;
    const cardTitle = document.getElementById(`card-title-${card}`).innerText;

    if (donationInput > 0) {
        const donationAmount = parseFloat(donationInput);
        if (donationAmount <= totalBalance) {
            updateBalances(donationAmount, card);
 
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid donation amount greater than 0.");
    }
}

function updateBalances(donationAmount, card) {
    totalBalance -= donationAmount; 
    document.querySelector('.balance span').textContent = `${totalBalance}`;

    const cardBalance = document.getElementById(`card-balance-${card}`);
    const currentCardBalance = parseFloat(cardBalance.textContent);
    cardBalance.textContent = `${currentCardBalance + donationAmount}`; 
}
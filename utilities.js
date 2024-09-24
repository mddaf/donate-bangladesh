
let totalBalance = 1000; // Set the initial balance here
let donationHistory = []; // Array to store donation history

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
        displayHistory(); // Display history when showing the history section
    }
}

window.onload = function () {
    toggleSection('donate'); // Default to showing the donate section
    // updateBalanceDisplay(); // Update the balance display on load
}

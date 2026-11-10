
// SpendWise JavaScript

// Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Collect information only when the user requests it
function collectBudgetInformation() {
    let budget = prompt("Enter your monthly budget:");

    // Stop if the user cancels
    if (budget === null) {
        return;
    }

    let totalExpenses = prompt("Enter your total expenses:");

    if (totalExpenses === null) {
        return;
    }

    // Convert input into numbers
    budget = Number(budget);
    totalExpenses = Number(totalExpenses);

    // Validate the information
    if (
        budget < 0 ||
        totalExpenses < 0 ||
        budget === "" ||
        totalExpenses === "" ||
        !Number.isFinite(budget) ||
        !Number.isFinite(totalExpenses)
    ) {
        alert("Please enter valid positive numbers.");
        return;
    }

    // Calculate remaining balance
    let remainingBalance = calculateBalance(budget, totalExpenses);

    // Display results in the browser console
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: KES", budget);
    console.log("Total Expenses: KES", totalExpenses);
    console.log("Remaining Balance: KES", remainingBalance);
    console.log("====================================");
}

// Wait for the page to load before connecting the button
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-budget");

    if (calculateButton) {
        calculateButton.addEventListener("click", collectBudgetInformation);
    }
});

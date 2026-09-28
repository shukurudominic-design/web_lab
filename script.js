// SpendWise JavaScript

// Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Collect budget from the user
let budget = prompt("Enter your monthly budget:");
budget = Number(budget);

// Collect expenses from the user
let totalExpenses = prompt("Enter your total expenses:");
totalExpenses = Number(totalExpenses);

// Calculate the remaining balance
let remainingBalance = calculateBalance(budget, totalExpenses);

// Display clearly labeled results in the console
console.log("===== SpendWise Budget Summary =====");
console.log("Monthly Budget: KES", budget);
console.log("Total Expenses: KES", totalExpenses);
console.log("Remaining Balance: KES", remainingBalance);
console.log("====================================");
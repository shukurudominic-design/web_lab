// SpendWise JavaScript
// Demonstrates arrays, loops, decisions, DOM manipulation and event listeners.

const budget = 50000;

// Multiple expense records are stored in an array.
let expenses = [
    { name: "Groceries", amount: 2500, category: "Food", date: "2026-09-01" },
    { name: "Bus Fare", amount: 300, category: "Transport", date: "2026-09-02" },
    { name: "Internet", amount: 1500, category: "Utilities", date: "2026-09-03" },
    { name: "School Supplies", amount: 1200, category: "Education", date: "2026-09-04" },
    { name: "Lunch", amount: 500, category: "Food", date: "2026-09-05" }
];

const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalSpending = document.getElementById("total-spending");
const remainingBudget = document.getElementById("remaining-budget");
const budgetDisplay = document.getElementById("budget-display");
const settingsBudget = document.getElementById("settings-budget");
const budgetMessage = document.getElementById("budget-message");

const categoryIds = {
    Food: "food",
    Transport: "transport",
    Rent: "rent",
    Entertainment: "entertainment",
    Savings: "savings",
    Utilities: "utilities"
};

function formatCurrency(amount) {
    return `KSh ${amount.toLocaleString("en-KE")}`;
}

// Function used to calculate the remaining balance.
function calculateBalance(budgetAmount, expensesAmount) {
    return budgetAmount - expensesAmount;
}

// Loop through all records to calculate total spending.
function calculateTotalExpenses() {
    let total = 0;

    expenses.forEach(function (expense) {
        total += expense.amount;
    });

    return total;
}

// DOM manipulation: display the array records in the table.
function displayExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(function (expense) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${formatCurrency(expense.amount)}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
        `;

        expenseList.appendChild(row);
    });
}

// Use loops and conditions to calculate each category total.
function updateCategoryCards() {
    Object.keys(categoryIds).forEach(function (category) {
        const prefix = categoryIds[category];
        let categoryTotal = 0;

        expenses.forEach(function (expense) {
            if (expense.category === category) {
                categoryTotal += expense.amount;
            }
        });

        const amountElement = document.getElementById(`${prefix}-total`);
        const percentElement = document.getElementById(`${prefix}-percent`);

        if (amountElement && percentElement) {
            const percentage = (categoryTotal / budget) * 100;
            amountElement.textContent = formatCurrency(categoryTotal);
            percentElement.textContent = `${percentage.toFixed(1)}% of budget`;
        }
    });
}

// Decision making: provide feedback based on the budget situation.
function updateBudgetSummary() {
    const total = calculateTotalExpenses();
    const remaining = calculateBalance(budget, total);

    totalSpending.textContent = formatCurrency(total);
    remainingBudget.textContent = formatCurrency(Math.max(remaining, 0));

    if (remaining < 0) {
        budgetMessage.textContent =
            `Warning: You are ${formatCurrency(Math.abs(remaining))} over your budget.`;
        budgetMessage.className = "budget-message warning";
    } else if (remaining === 0) {
        budgetMessage.textContent =
            "You have reached your monthly budget limit.";
        budgetMessage.className = "budget-message warning";
    } else if (total >= budget * 0.8) {
        budgetMessage.textContent =
            `You have used ${((total / budget) * 100).toFixed(1)}% of your budget. Consider reducing spending.`;
        budgetMessage.className = "budget-message caution";
    } else {
        budgetMessage.textContent =
            `Good job! You have ${formatCurrency(remaining)} remaining.`;
        budgetMessage.className = "budget-message success";
    }
}

// Refresh all dynamic parts of the dashboard.
function updateDashboard() {
    displayExpenses();
    updateCategoryCards();
    updateBudgetSummary();
}

// Event listener: handle the Add Expense form.
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value.trim();
    const amount = Number(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;
    const date = document.getElementById("expense-date").value;

    if (!name || amount <= 0 || !category || !date) {
        budgetMessage.textContent = "Please enter valid expense information.";
        budgetMessage.className = "budget-message warning";
        return;
    }

    // Add the user's new expense record to the array.
    expenses.push({
        name: name,
        amount: amount,
        category: category,
        date: date
    });

    // User action -> data update -> dashboard update.
    updateDashboard();

    expenseForm.reset();
});

budgetDisplay.textContent = formatCurrency(budget);
settingsBudget.textContent = formatCurrency(budget);

// Display the initial records when the page loads.
updateDashboard();

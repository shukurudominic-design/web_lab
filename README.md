# Budget Tracker Dashboard

## Project Overview

The Budget Tracker Dashboard is a responsive web application designed to help users monitor their monthly budget and expenses. It provides a clear dashboard where users can view spending by category, add new expenses, review recorded expenses, and see their remaining budget.

## Features

### 1. Dashboard Layout

The dashboard uses a sidebar navigation and a main content area. CSS Grid is used to organize the overall page layout.

### 2. Expense Categories

The dashboard displays expense cards for:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

Each card shows the amount spent and the percentage of the monthly budget.

### 3. Monthly Summary

The summary section displays total spending and the remaining budget.

### 4. Add Expense Form

The form allows users to enter:

* Expense name
* Amount
* Category
* Date

The form includes required fields and input validation.

### 5. Expense Table

The expense table displays recorded expenses with their name, amount, category, and date.

### 6. Responsive Design

CSS media queries make the dashboard responsive on different screen sizes. On smaller screens, the layout changes to a single-column design.

### 7. Micro-Interactions

Expense cards include hover and keyboard-focus effects using CSS transitions, transform, and box-shadow to provide visual feedback.

### 8. Theme

CSS custom properties are used to create a consistent color theme. The project also supports a dark theme using the user's system color-scheme preference.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* Responsive Web Design
* Google Fonts

## Project Files

### `index.html`

Contains the structure and content of the Budget Tracker Dashboard.

### `style.css`

Contains the visual styling, layout, responsive behavior, theme variables, and card interactions.

### `README.md`

Provides an overview of the project, its features, technologies, and file structure.

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

## Author

Shukuru Dominic

# SpendWise

SpendWise is a simple budget tracking application designed to help users manage their budget and expenses. The project combines HTML, CSS, and JavaScript to create a simple and user-friendly budgeting application.

## JavaScript Concepts Implemented

The project demonstrates several JavaScript concepts, including:

- Variables
- Data types
- User input
- Number conversion
- Calculations
- Functions
- Console output

## Variables

Variables are used to store important budgeting information such as the user's budget, total expenses, and remaining balance.

For example:

```javascript
let budget = prompt("Enter your monthly budget:");
budget = Number(budget);

# SpendWise Interactive

SpendWise is an interactive budgeting dashboard that lets users add expenses and see their budget information update on the webpage.

## JavaScript concepts implemented

### 1. Decision Making
`if`, `else if`, and `else` statements check the remaining budget and display appropriate feedback.

### 2. Multiple Records
An `expenses` array stores multiple expense objects containing the name, amount, category, and date.

### 3. Loops
`forEach()` and `Object.keys().forEach()` process expense records and category totals.

### 4. DOM Manipulation
JavaScript updates the expense table, category cards, total spending, remaining budget, and budget feedback directly on the webpage.

### 5. User Interactions
An `addEventListener("submit", ...)` event listener handles the Add Expense form without using browser prompts.

### 6. Connected Functionality
When a user submits an expense:
1. The form values are collected.
2. A new record is added to the `expenses` array.
3. The totals are recalculated.
4. The expense table and dashboard cards are updated.
5. Budget feedback is displayed.

## Files

- `index.html` — dashboard structure and form
- `style.css` — page styling and responsive layout
- `script.js` — interactive budgeting logic
# SpendWise – Budget Tracker

## Project Description

SpendWise is a simple budget tracking web application designed to help users understand their monthly budget, track expenses, and calculate their remaining balance.

The application uses HTML, CSS, and JavaScript to provide a simple and user-friendly budgeting experience.

## Technologies Used

- HTML5 – Application structure
- CSS3 – Styling, typography, colors, and layout
- JavaScript – User input, variables, calculations, and functions
- Git and GitHub – Version control and project hosting
- Netlify – Website deployment and automatic updates

## GitHub Repository Information

**Repository Name:** web_lab

**GitHub Repository:** https://github.com/shukurudominic-design/web_lab

## Live Netlify Website

**Live Website URL:** [INSERT YOUR ACTUAL NETLIFY URL HERE]

## Deployment Process Summary

1. Completed the SpendWise application using HTML, CSS, and JavaScript.
2. Uploaded the project files to a public GitHub repository.
3. Connected the GitHub repository to Netlify.
4. Configured Netlify to publish the root project directory.
5. Deployed the application and received a live website URL.
6. Tested the live website to confirm that its files and JavaScript functionality worked.
7. Updated the project and pushed the changes to GitHub.
8. Verified that Netlify automatically deployed the latest changes.

## Challenges Encountered During Deployment

Some challenges encountered during deployment included understanding the GitHub and Netlify connection process, configuring the correct publishing directory, and checking that the JavaScript file loaded correctly on the live website.

## Lessons Learned

Through this project, I learned how to:

- Deploy a website using Netlify.
- Connect a GitHub repository to Netlify.
- Publish a website to the internet.
- Configure automatic deployments.
- Test a live website.
- Use Git commands to update and maintain a project.

## Author

Shukuru Dominic

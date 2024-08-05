/********* create variables *********/
// Useful variables include: the cost per day, the number of days selected, and elements on the screen that will be clicked or modified.
// Initialize variables on page load if necessary, and reset or update them as needed.

var fullDayRate = 35;
var halfDayRate = 20;
var dailyRate = fullDayRate; // Default to full day rate
var daysSelected = new Set();

var dayButtons = document.querySelectorAll('.day-selector li');
var fullDayButton = document.getElementById('full');
var halfDayButton = document.getElementById('half');
var clearButton = document.getElementById('clear-button');
var calculatedCost = document.getElementById('calculated-cost');

/********* color change days of week *********/
// When a day button is clicked, apply the "selected" class to that element and update any other relevant variables.
// Recalculate the total cost. Don't update the day count if the same day is clicked more than once. Use .classList.contains() for this.

dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            daysSelected.delete(button.id);
        } else {
            button.classList.add('selected');
            daysSelected.add(button.id);
        }
        updateCost();
    });
});

/********* clear days *********/
// When the clear-button is clicked, remove the "selected" class from all days, reset relevant variables, and set the calculated cost to 0.

clearButton.addEventListener('click', function() {
    dayButtons.forEach(function(button) {
        button.classList.remove('selected');
    });
    daysSelected.clear();
    updateCost();
});

/********* change rate *********/
// When the half-day button is clicked, set the daily rate to $20, add the "selected" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function() {
    if (!halfDayButton.classList.contains('selected')) {
        dailyRate = halfDayRate;
        halfDayButton.classList.add('selected');
        fullDayButton.classList.remove('selected');
        updateCost();
    }
});

// When the full-day button is clicked, set the daily rate back to $35, add the "selected" class to the "full" element, remove it from the "half" element, and recalculate the total cost.

fullDayButton.addEventListener('click', function() {
    if (!fullDayButton.classList.contains('selected')) {
        dailyRate = fullDayRate;
        fullDayButton.classList.add('selected');
        halfDayButton.classList.remove('selected');
        updateCost();
    }
});

/********* calculate *********/
// Update the innerHTML of the calculated-cost element with the appropriate value.

function updateCost() {
    var numberOfDays = daysSelected.size;
    var totalCost = numberOfDays * dailyRate;
    calculatedCost.textContent = totalCost; // Set the cost value
}

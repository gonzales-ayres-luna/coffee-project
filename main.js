"use strict"


function renderCoffee(coffee) {
    // keeps h1 and p together
    var html = '<div class="coffee w-50 d-inline-flex align-items-baseline mb-4">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p class="ml-2">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }

    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value.toLowerCase();
    var selectedCoffee = coffeeSelection.value.toLowerCase();
    var filteredCoffees = [];
    var newCoffeeListing = [];

    for (var i = 0; i < coffees.length; i++) {
        let roast = coffees[i].roast;
        if (roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffees[i]);
        }
    }

    for (var i = 0; i < filteredCoffees.length; i++) {
        var name = (filteredCoffees[i].name).toLowerCase();
        if (name === selectedCoffee || name.includes(selectedCoffee)) {
            newCoffeeListing.push(filteredCoffees[i])
        }
    }

    coffeeList.innerHTML = renderCoffees(newCoffeeListing);
}



function newBrew(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var addedBrew = {
        id: coffees.length + 1,
        name: newCoffee.value.toLowerCase(),
        roast: newRoastSelection.value.toLowerCase(),
    }
    coffees.push(addedBrew);
    coffeeList.innerHTML = renderCoffees(coffees);
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-selection');
var newRoastSelection = document.querySelector('#roast-selection-new');
var newCoffee = document.querySelector('#coffee-new');
var newSubmitButton = document.querySelector('#submit-new');

coffeeList.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeSelection.addEventListener('input', updateCoffees);
newSubmitButton.addEventListener('click', newBrew);


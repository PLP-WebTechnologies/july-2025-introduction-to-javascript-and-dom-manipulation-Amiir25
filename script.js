// JavaScript Basics - Variables, Conditionals
function checkAge() {
    // Variable declaration and user input
    const age = parseInt(document.getElementById('userAge').value);
    let message; // Using let as this variable will be reassigned
    
    // Conditional logic
    if (isNaN(age)) {
        message = "Please enter a valid age.";
    } else if (age < 0) {
        message = "Age cannot be negative.";
    } else if (age < 18) {
        message = "You are a minor. You are not eligible to vote.";
    } else if (age >= 18 && age < 65) {
        message = "You are an adult. You are eligible to vote.";
    } else {
        message = "You are a senior citizen. You are eligible to vote.";
    }
    
    // Output result
    document.getElementById('ageResult').innerHTML = message;
}

function checkNumber() {
    // Variable declaration and user input
    const number = parseFloat(document.getElementById('numberInput').value);
    let result;
    
    // Conditional logic with comparison operators
    if (isNaN(number)) {
        result = "Please enter a valid number.";
    } else if (number === 0) {
        result = "The number is zero.";
    } else if (number > 0) {
        result = `The number <span class="highlight">${number}</span> is positive.`;
    } else {
        result = `The number <span class="highlight">${number}</span> is negative.`;
    }
    
    // Output result
    document.getElementById('numberResult').innerHTML = result;
}

// JavaScript Functions
function calculateArea() {
    // Function with parameters and return value
    function getArea(length, width) {
        return length * width;
    }
    
    // Get user input
    const length = parseFloat(document.getElementById('rectangleLength').value);
    const width = parseFloat(document.getElementById('rectangleWidth').value);
    
    // Input validation and function call
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('areaResult').innerHTML = "Please enter valid positive numbers for length and width.";
    } else {
        const area = getArea(length, width);
        document.getElementById('areaResult').innerHTML = 
            `The area of a rectangle with length ${length} and width ${width} is <span class="highlight">${area}</span>.`;
    }
}

function convertTemperature() {
    // Arrow function with parameter
    const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
    
    // Get user input
    const celsius = parseFloat(document.getElementById('celciusTemp').value);
    
    // Input validation and function call
    if (isNaN(celsius)) {
        document.getElementById('tempResult').innerHTML = "Please enter a valid temperature.";
    } else {
        const fahrenheit = celsiusToFahrenheit(celsius);
        document.getElementById('tempResult').innerHTML = 
            `${celsius}°C is equal to <span class="highlight">${fahrenheit.toFixed(1)}°F</span>.`;
    }
}

// JavaScript Loops
function runLoops() {
    const number = parseInt(document.getElementById('loopNumber').value);
    
    // Input validation
    if (isNaN(number) || number < 1 || number > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }
    
    // For loop example
    let forOutput = "";
    for (let i = 1; i <= 10; i++) {
        forOutput += `${number} × ${i} = ${number * i}<br>`;
    }
    document.getElementById('forLoopOutput').innerHTML = forOutput;
    
    // While loop example
    let whileOutput = "";
    let count = number;
    while (count >= 0) {
        whileOutput += `Countdown: ${count}<br>`;
        count--;
    }
    document.getElementById('whileLoopOutput').innerHTML = whileOutput;
}

// DOM Manipulation
function changeText() {
    // Changing text content of an element
    const textElement = document.getElementById('textElement');
    const texts = [
        "JavaScript is powerful!",
        "DOM manipulation is fun!",
        "You can create dynamic web pages!",
        "Web development is an exciting field!"
    ];
    
    // Randomly select a text
    const randomIndex = Math.floor(Math.random() * texts.length);
    textElement.textContent = texts[randomIndex];
    
    // Change style along with text
    textElement.style.fontWeight = "bold";
    textElement.style.color = "#1a2a6c";
}

function changeColor() {
    // Changing styles and attributes
    const colorBox = document.getElementById('colorBox');
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9c74f", "#90be6d", "#c8553d"];
    
    // Randomly select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
    
    // Add a text indicator of the color
    colorBox.textContent = randomColor;
    colorBox.style.display = "flex";
    colorBox.style.justifyContent = "center";
    colorBox.style.alignItems = "center";
    colorBox.style.color = "white";
    colorBox.style.fontWeight = "bold";
}

function addToList() {
    // Creating and modifying elements
    const newItemInput = document.getElementById('newItem');
    const itemText = newItemInput.value.trim();
    
    if (itemText === "") {
        alert("Please enter an item.");
        return;
    }
    
    // Create new list item
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    
    // Add remove button to list item
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.style.marginLeft = "10px";
    removeButton.style.padding = "3px 8px";
    removeButton.style.fontSize = "12px";
    removeButton.onclick = function() {
        listItem.remove();
    };
    
    listItem.appendChild(removeButton);
    
    // Add to list
    document.getElementById('itemList').appendChild(listItem);
    
    // Clear input
    newItemInput.value = "";
}

// Initialize page with some content
document.addEventListener('DOMContentLoaded', function() {
    // Add some initial items to the list
    const initialItems = ["JavaScript", "Functions", "Loops", "DOM"];
    const itemList = document.getElementById('itemList');
    
    initialItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.style.padding = "3px 8px";
        removeButton.style.fontSize = "12px";
        removeButton.onclick = function() {
            listItem.remove();
        };
        
        listItem.appendChild(removeButton);
        itemList.appendChild(listItem);
    });
});
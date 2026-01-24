// JavaScript for Lesson 5 demonstrations

// Wait for the page to load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the button and output div
    let button = document.getElementById('demo-btn');
    let output = document.getElementById('demo-output');
    
    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Create some variables
        let name = "Student";
        let score = Math.floor(Math.random() * 100);
        
        // Create a message using template literals
        let message = `Hello, ${name}! Your random score is: ${score}`;
        
        // Display the message in the output div
        output.innerHTML = `<strong>${message}</strong>`;
        
        // Change color based on score (ternary operator)
        output.style.color = score > 50 ? 'green' : 'red';
        
        // Also log to console for debugging
        console.log("Button clicked! Score:", score);
    });
});

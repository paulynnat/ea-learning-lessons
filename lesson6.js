// JavaScript for Lesson 6 demonstrations

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== FORM INPUT DEMO =====
    let greetBtn = document.getElementById('greet-btn');
    let demoInput = document.getElementById('demo-input');
    let greetingOutput = document.getElementById('greeting-output');
    
    greetBtn.addEventListener('click', function() {
        let name = demoInput.value;
        
        if (name === "") {
            greetingOutput.textContent = "Please enter your name!";
            greetingOutput.style.color = "red";
        } else {
            greetingOutput.textContent = `Hello, ${name}! Welcome!`;
            greetingOutput.style.color = "green";
        }
    });
    
    
    // ===== COUNTER APP =====
    let count = 0;
    
    let counterDisplay = document.getElementById('counter-display');
    let incrementBtn = document.getElementById('increment-btn');
    let decrementBtn = document.getElementById('decrement-btn');
    let resetBtn = document.getElementById('reset-btn');
    
    // Increment counter
    incrementBtn.addEventListener('click', function() {
        count++;
        counterDisplay.textContent = count;
    });
    
    // Decrement counter
    decrementBtn.addEventListener('click', function() {
        count--;
        counterDisplay.textContent = count;
    });
    
    // Reset counter
    resetBtn.addEventListener('click', function() {
        count = 0;
        counterDisplay.textContent = count;
    });
    
    
    // ===== TODO LIST APP =====
    let todoInput = document.getElementById('todo-input');
    let addTodoBtn = document.getElementById('add-todo');
    let todoList = document.getElementById('todo-list');
    
    // Function to add a new todo
    function addTodo() {
        let todoText = todoInput.value;
        
        // Check if input is empty
        if (todoText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create list item
        let li = document.createElement("li");
        li.textContent = todoText;
        
        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        
        // Add click event to delete button
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
        
        // Add delete button to list item
        li.appendChild(deleteBtn);
        
        // Add list item to the list
        todoList.appendChild(li);
        
        // Clear the input field
        todoInput.value = "";
    }
    
    // Add click event to Add button
    addTodoBtn.addEventListener('click', addTodo);
    
    // Allow Enter key to add task
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});

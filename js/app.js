(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn_cancel');
    let equal = document.querySelector('.btn_equal');
    let back = document.querySelector('.btn_back');


    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;  // Get value from the button's data-num attribute
            if (value) {
                screen.value += value;  // Append the value to the screen
            }
        });
    });

    
    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = ""; 
        } else {
            try {
                let result = eval(screen.value);  
                
                if (result === Infinity || result === -Infinity) {
                    screen.value = "Division by 0";  
                } else if (isNaN(result)) {
                    screen.value = "Error";  
                } else {
                    screen.value = result.toFixed(2);  
                }
            } catch (error) {
                
                screen.value = "Error";  
             
            }
        }
    });
    


    // Clear button to reset the screen
    clear.addEventListener('click', function(e) {
        screen.value = "";  // Clear the screen
    });

    // Back button to remove the last character
    back.addEventListener('click', function(e) {
        // Only allow backspacing if the value isn't empty
        if (screen.value.length > 0) {
            screen.value = screen.value.slice(0, -1);  // Remove last character
        }
    });
})();

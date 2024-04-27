const display = document.getElementById("display");
      const buttons = document.querySelectorAll(".num_button, .operation");
      const equalsButton = document.getElementById("equals");
      const clearButton = document.getElementById("clear");

      let currentInput = "";
      let result = "";

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          currentInput += button.textContent;
          display.value = currentInput;
        });
      });

      equalsButton.addEventListener("click", () => {
        try {
          result = calculate(currentInput);
          display.value = result;
        } catch (error) {
          display.value = result;
        }
      });

      clearButton.addEventListener("click", () => {
        currentInput = "";
        result = "";
        display.value = "";
      });

      function calculate(input) {
        let elements = input.match(/\d+|\+|\-|\*|\//g);
        if (!elements || elements.length === 0) {
            return 0;
        }
    
        elements = elements.map(element => {
            if (!isNaN(element)) {
                return parseFloat(element);
            } else {
                return element;
            }
        });
    
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === "*") {
                elements[i - 1] = elements[i - 1] * elements[i + 1];
                elements.splice(i, 2); 
                i--; 
            } else if (elements[i] === "/") {
                elements[i - 1] = elements[i - 1] / elements[i + 1];
                elements.splice(i, 2);
                i--;
            }
        }
    
        let result = elements[0];
        for (let i = 1; i < elements.length; i += 2) {
            let operator = elements[i];
            let operand = elements[i + 1];
    
            if (operator === "+") {
                result += operand;
            } else if (operator === "-") {
                result -= operand;
            }
        }
    
        return result;
    }

      
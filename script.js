console.log("Wongchai Chaiwong");
console.log("Mob");

let currentInput = '';
    let previousInput = '';
    let operation = null;

    function appendNumber(number) {
        currentInput += number;
        document.getElementById('display').value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operation = null;
        document.getElementById('display').value = '';
    }

    function setOperation(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculateResult();
        }
        operation = op;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculateResult() {
        if (currentInput === '' || previousInput === '') return;
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    clearDisplay();
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operation = null;
        previousInput = '';
        document.getElementById('display').value = currentInput;
    }
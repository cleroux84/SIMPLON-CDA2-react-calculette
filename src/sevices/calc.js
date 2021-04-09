

export const calc = (number1, number2, operator) => {

    let result = 0;

    switch (operator) {
        case '+':
            return result = parseFloat(number1) + parseFloat(number2)
        case '-':
            return result = (number1 - number2)
        case '*':
            return result = (number1 * number2) 
        case '/':
            return result = (number1 / number2)
        default:
            return result
    }
}
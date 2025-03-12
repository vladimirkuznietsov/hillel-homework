class Calculator {
    add(a, b, ...number) {
        return a + b + number.reduce((init, num) => init + num, 0);
    }

    substract(a, b, ...number) {
        return a - b - number.reduce((init, num) => init + num);
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

let calc = new Calculator();

console.log(calc.divide(7, 2));
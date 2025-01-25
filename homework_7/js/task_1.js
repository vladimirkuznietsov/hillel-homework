const sumValue = () => {
    let currentSum = 0;

    return (number) => {
        return currentSum += number;
    }
}

const getSum = sumValue();

console.log(getSum(1));
console.log(getSum(1));
console.log(getSum(1));
console.log(getSum(1));
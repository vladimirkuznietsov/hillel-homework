const differentTypes = ["String", 3, 43, null, true, 27, false, 15, Symbol('uniqueId'), undefined, 12];

const midValue = (array) => {
    let numbersCount = 0;

    const sum =  array.reduce((sum, item) => {
        if (typeof item == 'number') {
            numbersCount += 1;
            return sum + item;
        }
        return sum;
    }, 0);

    return sum / numbersCount;
}

console.log(midValue(differentTypes));
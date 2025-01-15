let number = prompt('Введіть ціле число:');

if (isNaN(Number(number))) {
    console.log('Введене значення не є числом');
}
else if (number == null || number == "") {
    console.log('Значення не було введено');
} else {
    for (let i = 1; i <= 100; i++) {
        if (i**2 > number) {
            break;
        } else {
            console.log(i);
        };
    };
};
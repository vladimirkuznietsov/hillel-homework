let number = prompt('Введіть ціле число:');

if (isNaN(Number(number)) || number == null) {
    console.log('Введене значення не є числом');
} else {
    for (let i = 1; i <= 100; i++) {
        if (i**2 > number) {
            break;
        } else {
            console.log(i);
        };
    };
};
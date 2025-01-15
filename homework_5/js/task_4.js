let number = prompt('Введіть число:');

if (Number(isNaN(number)) || number == "" || number == null) {
    console.log('Число не було введено');
}
else if (number < 2) {
    console.log(`Число ${number} не є простим`);
}
else if (number == 2) {
    console.log(`Число ${number} є простим`);
} else {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`Число ${number} є простим`);
    } else {
        console.log(`Число ${number} не є простим`);
    }
}
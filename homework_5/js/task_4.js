let number = prompt('Введіть число:');

if (number > 1 && (number -1) % 6 == 0 || (number + 1) % 6 == 0 || number == 3 || number == 2) {
    alert(`Число ${number} є простим`);
}
else if (isNaN(Number(number)) || number == null || number == "") {
    alert('Число не було введено');
} else {
    alert(`Число ${number} не є простим`);
};
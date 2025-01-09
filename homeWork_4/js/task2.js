const userNumber = prompt('Enter 3-digit number');
let all_equal;
let two_equal;

if ((userNumber[0] == userNumber[1]) && (userNumber[0] == userNumber[2])) {
    all_equal = true;
    two_equal = true;
} else if ((userNumber[0] == userNumber[1]) || (userNumber[0] == userNumber[2]) || (userNumber[1] == userNumber[2])) {
    all_equal = false;
    two_equal = true;
} else {
    all_equal = false;
    two_equal = false;
}

console.log(`All digits are equal: ${all_equal}
    \nTwo digits are equal: ${two_equal}`);
const array = [1, 3, 4, 6, 2, 5, 7];

const removeElement = (array, item) => {
    if (array.includes(item)) {
        array.splice(array.indexOf(item), 1);
    }
    return array;
}
console.log(removeElement(array, 1));
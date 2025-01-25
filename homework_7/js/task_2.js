const multiply = (x) => {
    return (y) => {
        return x * y;
    }
};

console.log(multiply(2)(3));
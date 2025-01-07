const num = 12345;

const result = num.toString().replace(/(.)(?=.)/g, '$1 ');

console.log(result);
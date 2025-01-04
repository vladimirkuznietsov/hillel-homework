let num = 12345;
let result = '';

for (let i = 0; i < `${num}`.length; i++) {
    if (`${num}`[i].indexOf == `${num}`.length - 1) {
        result = result + `${num}`[i];
    }   
    else {
        result = result + `${num}`[i] + ' ';
    }
  }

console.log(result);
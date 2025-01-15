const types = [1, 'Text', true, null, undefined, 123123123123123123123123123123123123123123123123123n, Symbol(4), {
    name: 'Paul',
}, ['apple', 'banana', 'orange'],];


for (let i = 0; i < types.length; i++) {
    console.log(`${String(types[i])}: ${typeof types[i]}`);
}
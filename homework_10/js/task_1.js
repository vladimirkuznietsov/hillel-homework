let userCard = {
    name: 'Chimi',
    lastName: 'Changa',
    age: '27',
    address: 'Miami',
    fillCard: function(name, lastName, age, address) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    },
    getUser: function() {
        return `Name: ${this.name}
        \nLast Name: ${this.lastName}
        \nAge: ${this.age}
        \nAddress: ${this.address}`
    }
};

userCard.fillCard('May', 'Johnson', '35', 'California');
console.log(userCard.getUser())

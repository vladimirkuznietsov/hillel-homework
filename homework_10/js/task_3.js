const contactBook = {
    data: [
        {
            name: 'John',
            phoneNumber: '123456',
            email: 'kent@gmail.com'
        },
        {
            name: 'Sam',
            phoneNumber: '54321',
            email: 'kent2@gmail.com'
        },
        {
            name: 'Dave',
            phoneNumber: '76589',
            email: 'kent3@gmail.com'
        }
    ],
    searchContact: function (name) {
        result = this.data.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (result) {
            return `Name: ${result.name}
                    \nPhone Number: ${result.phoneNumber}
                    \nEmail: ${result.email}`;
        } else {
            return 'No results';
        }
    },
    addContact: function (name, number, email) {
        const newContact = {
            name: name,
            phoneNumber: number,
            email: email
        };
        this.data.push(newContact);
    }
};

contactBook.addContact('Joe', '07986', 'kent4@gmail.com');
console.log(contactBook.searchContact(prompt('Search for contact')));
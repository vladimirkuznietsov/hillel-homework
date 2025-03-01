const submitBtn = document.getElementById('support-form');

submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = document.getElementById('name-field').value.trim();
    const msgField = document.getElementById('message-field').value.trim();
    const phoneField = document.getElementById('phone-field').value.trim();
    const emailField = document.getElementById('email-field').value.trim();

    let nameErr = '';
    let messageErr = '';
    let phoneErr = '';
    let emailErr = '';

    if(!nameField) {
        nameErr = 'This field is required';
    }

    if(msgField.length < 5) {
        messageErr = 'Message should be longer than 4 characters';
    }

    let phonePattern = /^\+380\d{9}$/;
    if(!phonePattern.test(phoneField)) {
        phoneErr = 'Phone number should start with +380 and have 9 digits after it';
    }

    let emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if(!emailPattern.test(emailField)) {
        emailErr = 'Email has invalid format';
    }

    document.getElementById('name-err').textContent = nameErr;
    document.getElementById('message-err').textContent = messageErr;
    document.getElementById('phone-err').textContent = phoneErr;
    document.getElementById('mail-err').textContent = emailErr;

    if(!nameErr && !messageErr && !phoneErr && !emailErr) {
        console.log(nameField, msgField, phoneField, emailField);
    }

    if(!nameField && !msgField && !phoneField && !emailField) {
        alert('Please fill the form');
    }
});
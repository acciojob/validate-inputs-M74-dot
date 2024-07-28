// define the patterns
var namePattern = /^[A-Za-z]{3,}$/;
var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
var mobilePattern = /^[0-9]{10}$/;

// get the input fields
var nameField = document.getElementById('name');
var emailField = document.getElementById('email');
var mobileField = document.getElementById('mobile');

// set the oninput event for each field
nameField.oninput = function() {
    this.style.backgroundColor = namePattern.test(this.value) ? 'lightgreen' : 'pink';
}
emailField.oninput = function() {
    this.style.backgroundColor = emailPattern.test(this.value) ? 'lightgreen' : 'pink';
}
mobileField.oninput = function() {
    this.style.backgroundColor = mobilePattern.test(this.value) ? 'lightgreen' : 'pink';
}
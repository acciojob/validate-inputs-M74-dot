//your JS code here. If required.
document.getElementById('myform').addEventListener('submit', function(event){
	event.preventDefault();
	
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;

	var namePtr = /^[A-Za-z]{3,}$/;
	var emailPtr = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	var phonePtr = /^[0-9]{10}$/;

	document.getElementById('name').style.backgroundColor = namePtr.test(name) ? 'lightgreen' : 'pink';
	document.getElementById('email').style.backgroundColor = emailPtr.test(email)? 'lightgreen':'pink';
	document.getElementById('phone').style.backgroundColor = phonePtr.test(phone)?'lightgreen':'pink';
	
	
});
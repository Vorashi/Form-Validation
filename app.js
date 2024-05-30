const form = document.getElementById('registration');
const icon = document.getElementsByClassName('validity-icon');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	checkLogin();
	checkEmail();
	checkPassword();
});

function checkLogin() {
	const login = document.getElementById('login').value;
	if( /^[a-zA-Z0-9]+$/.test(login) === false ) {
		showError('В логине должны быть только латинские буквы', 0);
	}
	if( login.length < 4 || login.length > 20 ) {
		showError('В логине должен быть от 4 до 20 символов', 0);
	}
	if( parseInt(login.substring(0, 1)) ) {
		showError('Логин должен начинаться с буквы', 0);
	}
	if (login !== '') {
		let validLogin = login.match(/^[a-zA-Z0-9]+$/).input;
		localStorage.setItem('login', validLogin);
		icon[0].style.visibility = 'visible';
	} else {
		icon[0].style.visibility = 'hidden';
		showError('Введите логин!', 0);
	}
}

function checkEmail() {
	const email = document.getElementById('email').value;
	if ( email.match(/^[a-z0-9]{7,20}@[a-z]{5,14}\.(com|ru)$/i) ) {
		let validEmail = email.match(/^[a-z0-9]{7,20}@[a-z]{5,14}\.(com|ru)$/i).input;
		localStorage.setItem('email', validEmail);
		icon[1].style.visibility = 'visible';
	} else {
		showError('Введите корректный email!', 1);
	}
}

function checkPassword() {
	const password = document.getElementById('password').value;
	if (password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/)) {
		let validPassWord = password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/).input;
		localStorage.setItem('password', validPassWord);
		icon[2].style.visibility = 'visible';
	} else {
		showError('Введите корректный пароль', 2);
	}
}

function showError(message, index) {
	const error = document.querySelector('.error-message');
	error.style.visibility = 'visible';
	icon[index].style.visibility = 'visible';
	error.textContent = message;
}
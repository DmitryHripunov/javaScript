'use strict';

function getDate() {
	const FORM_DATE = {
		day: 'numeric',
		month: 'long',
		weekday: 'long',
	};
	const date = new Date();
	const year = date.getFullYear();
	const seconds = date.getSeconds();
	
	return date.toLocaleString('ru-RU', FORM_DATE) +
		' ' + year + ' ' + 'года' +
		' ' + seconds + ' ' + 'сек.';
}

function User(firstName, lastName) { // создает объект типа «пользователь»
	this.firstName = firstName;
	this.lastName = lastName;
	
	this.regDate = function() {
		return this.firstName +
			' ' + this.lastName +
			' ' + 'дата регистрации' +
			' ' + getDate();
	}
}

function UserList() {  // создает объект типа “список пользователей”
	this.users = [];  // свойство-массив, в которое будут попадать объекты типа User
	
	this.add = function(value) { // метод получает в качестве параметра объект типа User и сохраняет его в массив
		return this.users.push(value)
	};
	this.getAllUsers = function() { // метод возвращает список пользователей из массива users
		return this.users;
	};
}

function getRegUsers() {
	const userList = new UserList(); // новый экземпляр       объекта UserList (с пустым свойством-массивом users).
	let usersInput;
	
	do {
		if(usersInput = prompt('введите имя и фамилию')) {//Открываться диалог prompt с предложением ввести имя и фамилию
			const userName = usersInput.trim().split(' ');
			
			if(userName[1] === undefined || userName[2]) {
				alert('ошибка!, нужно ввести имя и фамилию');
			} else {
				const user = new User(userName[0], userName[1]); //После нажатия ОК должен создаваться новый экземпляр объекта User
				userList.add(user.regDate());
			}
		}
	} while(usersInput !== null);
	
	// return alert(userList.getAllUsers())
	return console.log(userList.getAllUsers())
}

getRegUsers();

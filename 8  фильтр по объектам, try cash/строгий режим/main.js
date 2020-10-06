function isStrictMode(str) {
	'use strict';
	
	return eval(str);
}

try {
	const enterCode = prompt('Введите код');
	isStrictMode(enterCode)
}
catch(ex) {
	alert('не строгий режим - ' + ex)
}


//var sumWithOctal = 0o10 + 8;
//var undefined = 5;
//var Infinity = 5;

//var obj1 = {};

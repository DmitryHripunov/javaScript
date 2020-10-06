const field = $('.field');//$ селектор поле
const fieldWidth = field.innerWidth();//ширина поля
const fieldHeight = field.innerHeight();//высота поля
const coefficient = 100//коэффициент для расчета площади ворот
let numZero = 0;

/**
 * Функция getRandomNumber() генерирует случайное чило
 * @param {number} min - минимальное число
 * @param {number} max - максимальное число
 */
function getRandomNumber(min, max) {
	return parseInt(Math.random() * (max - min) + min);
}

$('.ball').on('click', function () {
	const ballRadius = $(this).width();//ширина  или высота мяча
	let positionsY = getRandomNumber(numZero, (fieldHeight - ballRadius));//получаем случайное число по вертикали
	let gateArea = fieldHeight / 2; // центр ворот
	
	$(this).animate({
		left: ++numZero % 2 * (fieldWidth - ballRadius),
		top: positionsY,
	}, 200, function () {
		let newPosition = $('.ball').position().top;
		if (newPosition <= (gateArea + coefficient) &&
				newPosition >= (gateArea - coefficient)) {
			alert('goool!!!');
		}
		
	});
});
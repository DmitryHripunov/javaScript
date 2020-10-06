'use strict';

// базовый конструктор «Транспортное средство» с общими для всех
// транспортных средств свойствами и методами

class Transport {
	constructor(length, height, width) {
		this.length = length;
		this.height = height;
		this.width = width;
	}
	
	getFullSize() {
		return 'длина' + ' ' + this.length + '(см)' +
			' ' + 'высота' + ' ' + this.height + '(см)' +
			' ' + 'ширина' + ' ' + this.width + '(см)'
	}
}

//дочерние конструкторы: автомобиль, самолет, корабль,
// которые наследуют общие свойства и методы от родительского
class Car extends Transport {
	brand(brand) {
		this.brand = brand;
		return 'марка машины' + ' ' + brand
	};
	
	speed(speed) {
		this.speed = speed;
		return 'максимальная скорость' + ' ' + speed + ' км/ч'
	}
}

class Plane extends Transport {
	flightChar(name, wingspan, weight) {
		length = name;
		this.height = wingspan;
		this.width = weight;
		
		return 'модель' + ' ' + name + ', ' +
			'размах крыльев более' + ' ' + wingspan + ' ' +
			'метров' + ' ' + 'масса' + ' ' + weight + '(кг)'
	}
}

class Ship extends Transport {
	changeName(name) {
		this.length = name;
		return 'Корабль' + ' ' + name
	};
	
	displacement(displacement) {
		this.displacement = displacement;
		return 'водоизмещение' + ' ' + displacement + ' ' + 'тонн'
	}
}

// продемонстрировать, как дочерние сущности могут переопределять
// родительские свойства и методы в соответствии со своим собственным поведением.
const car = new Car(2600, 1400, 900);
console.log(car.brand('honda'));
console.log(car.getFullSize());
console.log(car.speed(280));

const plane = new Plane(4600, 2400, 900);
console.log(plane.flightChar('Кукурузник', 3, 900));
console.log(plane.getFullSize());

const ship = new Ship(8600, 5400, 5000);
console.log(ship.changeName('Добрыня'));
console.log(ship.displacement(20));
console.log(ship.getFullSize());


class One {
	print() {
		console.log('one!');
	}
}

class Two extends One {
	print() {
		super.print();
		console.log('two!')
	}
}

const two = new Two();
two.print();
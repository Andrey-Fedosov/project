alert('hello, man. Lets work.');
//8. функции

// function calculateAge(year) {
	//return 2021-year
//};
//let myAge = calculateAge(1987);
//console.log(myAge);

function ageCalculate(year) {
	return 2021-year
};
//console.log(calculateAge(1990));
//console.log(ageCalculate(2014));

//function logInfoAbout (name, year) {
//	const age = ageCalculate(year)
//	if (age > 0) {
//	console.log('человек по имени '+ name + ' сейчас в возрасте ' + age)
//	} else {
//		console.log('что-то не  так или это уже о человеке, которые еще не родился');
//	}
//};
//logInfoAbout('Misha', 2014);

// 9 Массивы 1.31
//const carsVag = ['audi', 'seat', 'vw', 'Man'];
//console.log(carsVag);

//const cars = new Array('skoda', 'audi', 'vw')
//console.log(cars);
//const toyotaCars =['lexus', 'toyota', 'subaru'];
//console.log(toyotaCars);
//console.log(toyotaCars[2]);
//console.log(toyotaCars.length);
//toyotaCars[2] = 'daihatsu';
//toyotaCars[3] = 'subaru';
//console.log(toyotaCars);

// 10. циклы

//const carsVag = ['audi', 'seat', 'vw', 'Man'];

//for( let i = 0; i < carsVag.length; i++) {
//   const car = carsVag[i];
//   console.log(car)
//	};
	
//	for(let car of carsVag) {
//		console.log(car)
//	};
	
// 11. Объекты

// создаются через фигурные скобки иди через
// или черезкоманду new Object

const person = {
	firstName: 'Andrey',
	lastName: 'Fedosov',
    age: 34,
	isCarDriver: false,
	cities: ['mogilev', 'mstislavl', 'krichev'],
	greet: function(){
		console.log('Привет от Андрюхи!')
	}
};
// console.log(person);
// console.log(person.firstName);
// person.greet();
const key = "age";
console.log(person[key]);
person.isCarDriver = true;
//console.log(person);
//console.log(person.isCarDriver);
//console.log(person['isCarDriver']);

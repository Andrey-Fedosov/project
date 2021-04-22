// Курс по JS от Владилена Минина
// День 1 Часть 3 по курсу
// Переменные (Variable - если по английски)
//var name = 'Andrey'; // string
//const lastname = 'Fedosov'; // в конце строки д.б точки с запятой [;]
//const age = 33;

// name = 'Andryuha'
// age = 22; // number 
//console.log (name);
//console.log (age);
//const isProgrammer = true; // boolean 
//console.log(isProgrammer);

// переменная может начинаться со специального символа [_], [$]
// даже может состоять из одного специального  символа

//const _myDay = 14;
//const _ = 'january';
//const $ = "Byn";

// Но не может  начинаться с цифры - т.е
// const 3september = 'день прощания'; - это ошибка, так нельзя

// Важно именем переменной не может быть зарезервированное специальное слово
// const if = "condition"; - так нельзя
//console.log($);

// 2. Мутирование
//console.log('Имя Человека: ' + name + ', а возраст '+ age);

// в вышеописанной ситуации константа age  приведена к строковым данным.
// т.е. к age применен метод toString - выглядит это так age.toString
//console.log(age);
// alert('Имя Человека: ' + name + ', а возраст '+ age);
// alert в вышеописанном примере это не функция JS, а функция браузера
// const lastName = prompt('введите фамилию');
// alert (name+ ' '+ lastName);

//3. Операторы (остановился на 52:38)

//const currentYear = 2021;
//const birthYear = 1987;

// const myAge = currentYear - birthYear;
//console.log(myAge);

//let a = 5;
//let b = 12;
//let c = 6
//c += a; // эквивалент с=с+a, может использоваться и вычитание и  умножение

//console.log(a + b); // оператор сложения
//console.log(a - b); // оператор вычитания
//console.log(a * b); // оператор умножения
//console.log(b / a); // оператор деления
//console.log(a++); // добавляет 1
//console.log(b--); // отнимает 1
//console.log(a**);
// console.log(a);
//console.log(b);
//console.log(c);

// 4 Типы данных

//name = 'Andryuha';
//age = 22; 
//const isProgrammer = true;
//let x;
//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof isProgrammer);
//console.log(typeof x);

// 5 приоритет операторов

//const fullAge = 33;
//const currentYear = 2019;
//const birthYear = 1987;
//const isFullAge = currentYear - birthYear >= fullAge // 33-34
//console.log(isFullAge);

// 6 условные операторы

//const courseStatus = 'fail'; // хотя может быть еще как: ready, fail, pending

//if (courseStatus === 'ready') {
	//console.log('курс готов. Можно проходить')
//} else if (courseStatus === 'pending') {
//	console.log ('Курс в разработке. Нужно подождать')
//} else{
//	console.log('курс не получился')
//};
//const num1 = 42;
//const num2 = '42';

//if (num1 === num2) {
	//console.log ('константы равны между собой')
//} else {
//	console.log('константы не равны')
//};

//let isEqual = true;
//if (isEqual) {
//	console.log('значения равны')
//	console.log('внимание. значения отличаются')
//};

// Тернарное  выражение

let isColdToday = false;
isColdToday ? console.log('Холодно. Надень шапку') : console.log('Иди так, балбес');

//7. Булевая логика - вернуться сюда и проработать дополнительно

// логическое И - суть, что принимается значение истинно, если естинны все условия. Если хотябы одно ложно то все принимается ложно

let isTuesday = true;
let isRightMoon = true;
let isNailGroom = isTuesday && isRightMoon;
console.log(isNailGroom);
let isTuesday1 = true;
let isRightMoon1 = false;
let isNailGroom1 = isTuesday1 && isRightMoon1;
console.log(isNailGroom1);
let isTuesday2 = false;
let isRightMoon2 = true;
let isNailGroom2 = isTuesday2 && isRightMoon2;
console.log(isNailGroom2);
let isTuesday3 = false;
let isRightMoon3 = false;
let isNailGroom3 = isTuesday3 && isRightMoon3;
console.log(isNailGroom3);

// логическе или || - выдает значение истина при условии, что один из оперрандов команды будет истинным.
// пример ниже

let isBornInBY = true;
let hasByPassport = true;
let isBelarusCitizen = isBornInBY || hasByPassport;
console.log(isBelarusCitizen);

let isBornInBY1 = false;
let hasByPassport1 = true;
let isBelarusCitizen1 = isBornInBY1 || hasByPassport1;
console.log(isBelarusCitizen1);

let isBornInBY2 = true;
let hasByPassport2 = false;
let isBelarusCitizen2 = isBornInBY2 || hasByPassport2;
console.log(isBelarusCitizen2);

let isBornInBY3 = false;
let hasByPassport3 = false;
let isBelarusCitizen3 = isBornInBY3 || hasByPassport3;
console.log(isBelarusCitizen3);

// логическое отрицание ! прнимает истину если операнд принимает значение противоположное (ложь).

let isDrinkingToday = false; // операнд он же аргумент - выпивал ли человек сегодня. здесь -да
let hasDrivePermition = !isDrinkingToday; // выезд разрешается при условии, что аргумент ложен
console.log(hasDrivePermition);

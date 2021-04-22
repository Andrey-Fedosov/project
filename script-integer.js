// Числа и BigINT - number

const num = 18; // integer - они же целые 
//console.log(num);
const float = 42.42; // float - дробные
//console.log(float);
const  pow = 2e3; // 2 *10 третьей степени
console.log(pow);

Number.MAX_SAFE_INTEGER //  максимальное целое число
console.log('Максимальное целое число', Number.MAX_SAFE_INTEGER)
// 9007199254740991

console.log(Math.pow(2, 53)-1);
console.log('минимальное целое число', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE) // максимальное значение, но не используется в операциях 
// n/ для операций  используется величина MAX_SAFE_INTEGER
console.log('MIN_VALUE', Number.MIN_VALUE) //

console.log('положительная бесконечность', Number.POSITIVE_INFINITY);
console.log('отрицательная бесконечность', Number.NEGATIVE_INFINITY)
console.log(Number.NaN); // not a number
console.log(typeof NaN); // typeof применяется для определения к какому типу данных
console.log(typeof 'город Могилев');
const weird =8/undefined;
//console.log(weird);
//console.log(Number.isNaN(weird));
//console.log(Number.isFinite(42));

//const stringInt = '42';
//const stringFloat = '42.42';
//console.log (stringInt + 2); // на  выходе полчится 422 - т.к. конкатенация -к строковой 42 добавит переведенную в строку 2
//console.log (Number.parseInt(stringInt) + 2);
//console.log (Number(stringInt) + 2);
//console.log (+(stringInt) + 2);
//console.log (parseInt(stringInt) + 2);

// если работа ведется с Float
// console.log(parseFloat(stringFloat)+2); // вариации написания могут быть такие же как и для parseInt

// работа с дробными

//console.log(0.2 + 0.4);
//console.log((2 / 10) + (4 / 10));
//console.log((0.2+0.4).toFixed(3));
//console.log(parseFloat((0.2+0.4).toFixed(3)));
//console.log(parseFloat((0.2+0.4).toFixed(3)));
//const sum =parseFloat((0.2+0.4).toFixed(3));
//console.log (typeof sum);

// BigINT

// console.log (Number.MAX_SAFE_INTEGER);
// const sumForBigI = 90071992547409919999999n; // буква n после записи указывает, что тип данных - bigint
// console.log(sumForBigI);
// console.log (typeof sumForBigI);
// bigint  может быть отрицательным числом, но не может быть дробным (т.е. float)

//console.log(10n -4n);
//console.log(parseInt(10n) -4);
//console.log(10n - BigInt(4));

// Объекты Math

console.log(Math.E); // экспонента
console.log(Math.PI);// число Пи

console.log(Math.sqrt(121)); // извлекает квадратный корень
console.log(Math.pow(5, 3)); // возводит в степень
console.log(Math.pow(25, 0.5)); // возводит в степень

console.log(Math.abs(-34)); // находит модуль числа
console.log(Math.max(5, 12, 36, 4, -34)); // находит максимальное из списка
const numberRow = [1, 6, 12, 14, 32];
console.log(numberRow);
console.log(Math.max(5, 12, 36, 4, -34)); // находит максимальное из списка
// console.log(Math.max(numberRow)); не сработало, т.к. нужен ряд чисел, не массив
console.log(Math.min(6, 4, 12, -3, 5, -4.5)); // находит минимальное  значение из ряда

console.log(Math.floor(12.6)); // округляет до меньшего целого
console.log(Math.floor(-12.6)); // округляет до меньшего целого
console.log(Math.ceil(14.1)); // округляет в большую сторону
console.log(Math.round(14.7)); // округляет до ближайшего целого
console.log(Math.trunc(14.7)); // округляет убирая дробные цифры
console.log(Math.random());  // выдают разные значения числа

// так же возможно нахождения разлинчых синусов и косиносов и  других тригонометрических функций

// задача функции возвращающ целые числа в диапазоне

//function getRandom(min, max) {
//	let randomPart = Math.trunc((max-min) * Math.random());
//	return(min + randomPart+1)
//	}
//console.log(getRandom(12, 25)); // это мое решение задачи про постоянный вывод случайных чисел в определенном диапазоне

//  а ниже решение Владилена Минина

function getRandomVlad(min, max) {
	return Math.floor(Math.random() * (max - min+1) + min )
};
console.log(getRandomVlad(23, 46));




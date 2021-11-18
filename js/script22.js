
'use strict';

const arr = [1, 21, 3, 15, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
return a-b;	
}

// arr.pop(); //метод удаляет последний элемент массива
//arr.push(9); // метод добавляетв в конец массива элемент 9

//arr.shift(); // метод удаляет первый элемент массива
//arr.unshift(4); // метод добавляет первый элемент массива

// arr.forEach(function(item, i, arr) {
	// console.log( `${i}: ${item} внутри массива ${arr}`);
// });

// ниже метод перебора элементов массива
//for(let i = 0; i < arr.length; i++) {
	//console.log(arr[i]);
//}
// еще один метод перебора элементов массива - for-off
//for (let value of arr) {
	//console.log(value);
//}

//arr[18] = 11;
//console.log(arr.length);

const string = prompt('', '');
const products = string.split(' ');
console.log(products.sort());
//console.log(products.join(', '));


//console.log(arr);


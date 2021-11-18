//19 методы и свойства

// const myString = 'testshmest'
// console.log(myString.length); 
// console.log(myString[3]);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('me'));

// const logg = 'Hello world';
// console.log(logg.slice(-5, -1));

// const testSize = '12.2px';
// console.log(parseInt(testSize)); // преващено в целое число 

// 20 колбэк функция

'use strict';

 

// 21 Объекты в JS

// еще один способ создания объекта. см следующую строку

// const obj = new Object(); - не  рокомендуют его использовать

const options ={
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
	  border: 'red',
	  bg: 'black'
  },
  makeTest: function() {
	  console.log('test done');
  }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);


//console.log(options.name); // вызов свойства name объекта options
//console.log(options.colors);
// console.log(options['colors']);

// console.log(options['colors']['bg']); // вызов свойства bg из объекта colors, вложенного в объект options

// для удаления

//delete options.name;

// для перебора свойств  нужно использовать следующую
// для подсчета количества свойств у объекта создадим переменную counter
// let counter = 0;
// for (let key in options) {
	// if (typeof(options[key]) === 'object') {
		// for (let i in options[key]) {
			// console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		    
		// }
	// } else	{console.log(`Свойство ${key} имеет значение ${options[key]}`);
	         // counter++;
// }
// }

// console.log(options);
// console.log(counter);

//console.log(Object.keys(options)); // метод выдает все ключи объета в виде массива
// исходя из этого уже можно узнать длину массива  через свойство length:

//console.log(Object.keys(options).length);
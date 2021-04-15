// Курс по JS от Владилена Минина
// День 1 Часть 3 по курсу
// Переменные (Variable - если по английски)
var name = 'Andrey'; // string
//const lastname = 'Fedosov'; // в конце строки д.б точки с запятой [;]
const age = 33;

// name = 'Andryuha'
// age = 22; // number 
console.log (name);
console.log (age);
const isProgrammer = true; // boolean 
console.log(isProgrammer);

// переменная может начинаться со специального символа [_], [$]
// даже может состоять из одного специального  символа

const _myDay = 14;
const _ = 'january';
const $ = "Byn";

// Но не может  начинаться с цифры - т.е
// const 3september = 'день прощания'; - это ошибка, так нельзя

// Важно именем переменной не может быть зарезервированное специальное слово
// const if = "condition"; - так нельзя
console.log($);

// 2. Мутирование
console.log('Имя Человека: ' + name + ', а возраст '+ age);

// в вышеописанной ситуации константа age  приведена к строковым данным.
// т.е. к age применен метод toString - выглядит это так age.toString
console.log(age);
// alert('Имя Человека: ' + name + ', а возраст '+ age);
// alert в вышеописанном примере это не функция JS, а функция браузера
// const lastName = prompt('введите фамилию');
// alert (name+ ' '+ lastName);

//3. Операторы (остановился на 52:38)




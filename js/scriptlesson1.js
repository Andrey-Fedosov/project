// создать переменную, в которую будет помещен ответ на вопрос сколько фильмов Вы уже посмотрели

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')  
  }
}

start();

console.log(numberOfFilms); // почти верно автор добавил еще  унарный плюс сто бы было число


let personalMovieDB = { 
	count : numberOfFilms, // сделал верно
	 movies : { }, // тоже верно было ошибка, но сам исправил (начинал с let)
	 actors : { },
	 genres : [ ],
	privat : false;
};

function rememberMyfilms() {
  for (i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Во сколько Вы его оценили', '');
    
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    	personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
    	console.log('error');
    	i--;}
  }
}

rememberMyfilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
  	console.log( 'просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log ('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
  	console.log ('Вы киноман');
  } else  if (personalMovieDB.count < 0 || personalMovieDB.count == '' || personalMovieDB.count == null){
  	console.log('произошла ошибка');
  }
};

detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	} else {
		console.log('base is privat');
	}
} 

showMyDB();

// function writeYourGenres() {
	// for (let i = 0; i < 3; i++) {
	  // let counter = i + 1,
	      // a = prompt(`Ваш любимый жанр под номером  ${counter}`);
		  
	// personalMovieDB.genres[i] = a;  
	// }
	// console.log(personalMovieDB.genres);
// };

// также предложен еще один вариант

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
	  personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером  ${i}`, '');
	}
}
writeYourGenres();
// строки 39-50 цикл через do
/* let i = 0;
do { let a = prompt('один из последних просмотренных фильмов'),
         b = prompt('во сколько вы бы его оценили');
     if (a != '' && b != '' && a != null && b != null && a.length < 50) {		 
	 personalMovieDB.movies[a] = b;
	 i++;
     console.log('done')
} else {
	 console.log('error');
}}
while (i < 2); */
// ниже идут строки по циклу while
 /* while (i < 2) { */
/*   let a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Во сколько Вы его оценили', '');
	  i++;

if (a != '' && b != '' && a != null && b != null && a.length < 50) {
	personalMovieDB.movies[a] = b;
    console.log('done');
	} else {
	console.log('error');
	i--;}
} */
//console.log(a[0]);
//console.log(b[0]);
/* let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('Во сколько Вы его оценили', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('Во сколько Вы его оценили', '');
	
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
 */
// let lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '' ); // сделал верно, автор использовал вместо 
//длинного имени переменной короткое (a,b c, d)
// let yourRate = prompt('Во сколько Вы его оценили?', ''); // и переменные задавал через запятую
// let lastSeenMovie2 = prompt('Еще Один из последних просмотренных фильмов?', ''); 
// let yourRate2 = prompt('Во сколько Вы его оценили?', '');

//мой вариант не верный : let movies['lastSeenMovie'] = yourRate; -неверно пытаться создать новуб переменную
// personalMovieDB.movies[lastSeenMovie] = yourRate;
// personalMovieDB.movies[lastSeenMovie2] = yourRate2;
// /* сначала указываетс я объект  (в нашем случае personalMovieDB)
// затем через точку указывается ключ (movies), 
// который в нашем случае тоже является объектом, а затем в квадратных скобках
// указываютс я ключ (lastSeenMovie) а после знаком присваивания значение*/



'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренныхфильмов?', ''),
    b = prompt('На сколько оценете его?', '10.0'),
    c = prompt('Один из последних просмотренныхфильмов?', ''),
    d = prompt('На сколько оценете его?', '10.0');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}
// const num = 50;
// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log("over big!");
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!'): console.log('Error!');
const num = 50;
switch (num) {
    case 49: //case работет только на строгое сравнение
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50: //case '50' проверка строчки
        console.log('In dot!');
        break;
    default:
        console.log("не в этот раз");
}
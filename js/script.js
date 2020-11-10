/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// const a = prompt('Один из последних просмотренныхфильмов?', ''),
// b = prompt('На сколько оценете его?', '10.0'),
// c = prompt('Один из последних просмотренныхфильмов?', ''),
// d = prompt('На сколько оценете его?', '10.0');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренныхфильмов?', ''),
//         b = prompt('На сколько оценете его?', '10.0');
//     if (a != null && b != null && a != '' & b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done!');
//     } else {
//         console.log('error');
//         i--; //если условие не выполнилось то возвращаемся на одну итерацию назад
//     }

// }
// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');

// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы кноман!');
// } else {
//     console.log('Произошла ошибка');
// }
// let i = 2;
// do {
//     const a = prompt('Один из последних просмотренныхфильмов?', ''),
//         b = prompt('На сколько оценете его?', '10.0');
//     if (a != null && b != null && a != '' & b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done!');
//     } else {
//         console.log('error');
//         i--; //если условие не выполнилось то возвращаемся на одну итерацию назад
//     }
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');

//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы кноман!');
//     } else {
//         console.log('Произошла ошибка');
//     }
// } while (i < 2);
// let i = 0;
let i = 2;
while (i) {
    // while (i < 2) {
    const a = prompt('Один из последних просмотренныхфильмов?', ''),
        b = prompt('На сколько оценете его?', '10.0');
    if (a != null && b != null && a != '' & b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error');
        // break;
        i--; //если условие не выполнилось то возвращаемся на одну итерацию назад
    }
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы кноман!');
    } else {
        console.log('Произошла ошибка');
    }
    // i++;
    i--;
}
console.log(personalMovieDB);
'use strict';
const str = 'teSt';

const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);
// console.dir();//в консоле браузера показывает все свойтсва обьекта
console.log(str.toUpperCase());
console.log(str.toLowerCase());
const fruit = "Some fruit";
console.log(fruit.indexOf('fruit')); //узнать с какой позиции нас=чинается fruit
// три метода изменения строки

const logg = "Hello Word!";
console.log(logg.slice(6, 11)); //вырезаем с шестой позиции по 11 включительно
console.log(logg.slice(6)); //вырезаем с шестой позиции до конца
console.log(logg.slice(-5, -1)); //вырезаем справа на лево
console.log(logg.substring(6, 11)); //не поддерживается отрицательные значения одинаковые со slice
console.log(logg.substr(6, 5)); // сколько символов ннада вырезать(5) -пять после шестого номера слева на право
// Math.
const num = 12.2;
console.log(Math.round(num)); // округление до ближайшего целого
const test ="12.2px";
console.log(parseInt(test));//переводит в другую систему исчесления 
console.log(parseFloat(test));//переводит в другую систему c плавающей точкой
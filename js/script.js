'use strict';
let num = 25; //глобальг=ная переменная
function showFirstMessage(text) {
    //имя функции должно быть глаголом над чем выполняется действие
    // есть анонимные функции-они есть сдесь и сейчас, в будущем не используется больше
    console.log(text);
    let num = 20; //если переменную мы создаем внутри фунции то вне неё она не доступна(не существует);локальная переменная
    // let num = 33;
    console.log(num);
}
showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
//     //то что после ретор не выполняется \реторн возвращает значения во внешний мир и оканчивает функции
// }
// console.log(calc(2, 9));
// console.log(calc(1, 5));

function ret() {
    let num = 59;
    //
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log('Hello');
};
logger();

// const calc = (a, b) => {
//     return a+b;
// };
// console.log(calc(4,9));
const calc =a => a+5;//предполагает ретерн сразу- можно не писать аесли со скобками, то необходимо писать реторн
console.log(calc(9));

'use strict';
// обьекты это структуры которые могут сохранять в себе абсолютно любые типы данных в формате ключ(key): 'значение'
//они могут быть также вложенные обьект в обьекты массив в обьекты   тд.. чтобы их перебрать мы можем испоьлзовать for in и внутри мделать всё что угодна как с ключами так и со значениями этих ключецей,получать свойства мы можем через точку или через двойные сквадратные скобки. У обьектов бывают встроенные методы и встроенные свойства, которые мы можем использовать. Чтоб наш обьект мог что-то делать мы можем внутри него записывать функции и таким образом мы будем создавать методы нашего обьекта
//свойства апсцесоры get&set
// const obj = new object(); // обычно так не делают
const options = {
    name: 'test', //key-ключ test - значение
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest:function(){
        console.log('Test');
    }
    //мы создали свой метод))
};
opions.makeTest();

//десруктуризация обьктов
const {border,bg}= options.color;
console.log(border);

console.log(options['color']['border']);
console.log(options.name);
// delete options.name; //delete удалить из options name
console.log(options);

let counter =0;
for (let key in options) { //цикл будет срабатывать столько раз, сколько в обьекте свойств
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`свойство ${key} имеет значение ${options[key]}`); //каждый раз мы будем получать значение ключа который участвует в этой итерации цикла
        counter++;
    }
}
console.log(counter);
// for of -этот метод не будет пееберать обьекты
console.log(Object.keys(options).length);

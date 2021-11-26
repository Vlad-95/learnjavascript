'use strict'

/*
1. Независимы ли счётчики?
важность: 5
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
*/

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1


/*
2. Объект счётчика
важность: 5
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
*/

function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter3 = new Counter();

console.log( counter3.up() ); // 1
console.log( counter3.up() ); // 2
console.log( counter3.down() ); // 1

/*
3. Функция в if
Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
*/

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

//sayHi();
/*
Результатом будет ошибка.

Функция sayHi объявлена внутри if, так что она живёт только внутри этого блока. Снаружи нет sayHi.
*/

/*
4. Сумма с помощью замыканий
важность: 4
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4
*/

function sum(a) {
    return function(b) {
        return b + a;
    }
}

console.log(sum(1)(2))
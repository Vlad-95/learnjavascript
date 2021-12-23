// let animal = {
//     eats: true
// }

// function Rabbit (name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('Alice');

// console.log(rabbit.eats)


/*
1. Изменяем "prototype"
важность: 5
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
*/

function Rabbit() {}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; 
/*
    true.

    Присвоение нового значения свойству Rabbit.prototype влияет на [[Prototype]] вновь создаваемых объектов, но не на прототип уже существующих.
*/

// Rabbit.prototype.eats = false;
/*
    false.

    Объекты присваиваются по ссылке. Не создаётся копия Rabbit.prototype, это всегда один объект, на который ссылается и Rabbit.prototype, и [[Prototype]] объекта rabbit.

    Таким образом, когда мы изменяем этот объект по одной ссылке, изменения видны и по другой.
*/

// delete rabbit.eats;
/*
    true.

    Операция delete применяется к свойствам конкретного объекта, на котором она вызвана. Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет. Таким образом, просто ничего не произойдёт.
*/


delete Rabbit.prototype.eats;
/*
    undefined.

    Свойство eats удалено из прототипа, оно больше не существует.
*/


console.log( rabbit.eats ); // true


/*
2.Создайте новый объект с помощью уже существующего
важность: 5
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/
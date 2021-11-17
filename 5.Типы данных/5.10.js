// let arr = ["Влад", "Звездин"];

// let [first, sur] = arr;

// console.log(first)

/*
1. Деструктурирующее присваивание
важность: 5
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/

let user = {
    name: "John",
    years: 30
};

let {name, years, isAdmin = false} = user;

console.log(name);
console.log(years);
console.log(isAdmin);

/*
2. Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj) {
    let maxValue = 0;
    let maxName = null;

    for (let [key, value] of Object.entries(obj)) {
        if (value > maxValue) {
            maxValue = value;
            maxName = key;
        }
    }

    return maxName;
}

console.log(topSalary(salaries));
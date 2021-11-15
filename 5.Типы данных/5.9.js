/*
1. Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


// вариант через reduce
function sumSalariesReduce(obj) {
    obj = Object.values(salaries).reduce((sum, value) => sum + value, 0)
    
    return obj;
}

console.log(sumSalariesReduce(salaries))

//с помощью метода Object.values и цикла for..of
function sumSalariesCycle(obj) {
    let values = Object.values(obj);
    let sum = 0;

    for (let item of values) {
        sum += item
    }

    console.log(sum)
}
  
sumSalariesCycle(salaries)


/*
2. Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    let keys = Object.keys(obj);

    return keys.length;
}

console.log(count(user))
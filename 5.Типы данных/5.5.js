let arr = [1, 2, 3];
arr.splice(0,2);

console.log(arr);

let users = [
    {id: 1, name: "Влад"},
    {id: 2, name: "Ярослав"}
]

let user = users.find(function(item) {
    return item.id == 1;
});
//=====
let filterUsers = users.filter(function(item) {
    return item.id < 3;
})
console.log(filterUsers)
//=====
let result = [
    "Влад",
    "Ярослав"
]

result = result.map(item => item.length);

console.log(result);
//====

let numbs = [1, 2, 15];

let newNumbs = numbs.sort();

console.log(numbs);

/*
1.

Переведите текст вида border-left-width в borderLeftWidth


Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/

function camelize(str) {
    // вариант с объявлением переменных

    // let arr = str.split("-");
    // let newArr = [];

    // for (let i = 0; i < arr.length; i++) {
        
    //     if (i > 0) {
    //         let firstChar = arr[i][0].toUpperCase();
    //         let item = firstChar + arr[i].slice(1);

    //         newArr.push(item);
    //     } else {
    //         newArr.push(arr[i]);
    //     }        
    // }

    // let result = newArr.join("");

    // return result;

    //вариант с map
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

console.log(camelize("border-left-width"));



/*
2.

Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.
*/

let array = [5, 3, 8, 1];
let testArray = ["Bilbo", "Gandalf", "Nazgul"];

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));            
}


// filterRange(array, 1, 4)
//console.log(array)
console.log(filterRange(array, 1, 4));

/*
3.

Фильтрация по диапазону "на месте"


Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
*/
let array3 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
console.log(array3)
filterRangeInPlace(array3, 1, 4);
console.log(array3);

/*
4.

Сортировать в порядке по убыванию
*/

let array4 = [5, 3, 8, 1];

array4.sort((a, b) => b - a)

console.log(array4);


/*
5.

Скопировать и отсортировать массив

У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

let array5 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

copySorted(array5);

console.log(array5)


/*
6.

Создать расширяемый калькулятор


Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

1)
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

2)
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:
*/

function Calculator () {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    },

    this.calculate = function(str) {
        let split = str.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        
        return this.methods[op](a, b)
        
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;

calc.addMethod("**", (a, b) => a ** b);

console.log(calc.methods)

console.log(calc.calculate("2 ** 3"));


/*
7.

Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users7 = [ vasya, petya, masha ];

let names = users7.map(item => item.name)

console.log(names)

/*
8.

Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

*/

let vasya8 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya8 = { name: "Петя", surname: "Иванов", id: 2 };
let masha8 = { name: "Маша", surname: "Петрова", id: 3 };

let users8 = [ vasya8, petya8, masha8 ];


let usersMapped = users8.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

console.log(usersMapped)

/* 
9.

Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

*/

let vasya9 = { name: "Вася", age: 25 };
let petya9 = { name: "Петя", age: 30 };
let masha9 = { name: "Маша", age: 28 };

let arr9 = [ vasya9, petya9, masha9 ];

function sortByAge (arr) {
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr9);

console.log(arr9)

/*
10.

Перемешайте массив
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
*/

let arr10 = [1, 2, 3];

function shuffle (arr) {
    //arr.sort(() => Math.random() - 0.5)
    //или
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(arr10);

console.log(arr10)

/* 
11.

Получить средний возраст
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

*/

let vasya11 = { name: "Вася", age: 25 };
let petya11 = { name: "Петя", age: 30 };
let masha11 = { name: "Маша", age: 29 };

let arr11 = [ vasya11, petya11, masha11 ];

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length
}

console.log(getAverageAge(arr11));

/*
12.

Оставить уникальные элементы массива


Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }

    return result
}

console.log(unique(strings));
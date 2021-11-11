/*
1.Фильтрация уникальных элементов массива
важность: 5
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/

function unique(arr) {
    // let valuesSet = new Set();

    // for (let item of arr) {
    //     valuesSet.add(item)
    // }

    // return valuesSet

    return Array.from(new Set(arr))
}



let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O


/*
3.Перебираемые ключи
важность: 5
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:

Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys())

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

/*
Это потому что map.keys() возвращает итерируемый объект, а не массив.

Мы можем конвертировать его в массив с помощью Array.from:

*/

console.log(keys)
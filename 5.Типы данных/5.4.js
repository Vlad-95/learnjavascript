/*
1.

Скопирован ли Массив?
*/

let fruits = [1,2,3];

let fruits2 = fruits;

fruits2.push(4);

console.log(fruits.length)

/*
2.

Операции с массивами

Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:
*/

let styles = ["Джаз", "Блюз"];

styles.push("Рокнролл");

styles[Math.floor((styles.length - 1) / 2)] = "Классика"

styles.shift();

console.log(styles);

styles.unshift("Рэп", "Рэгги")

console.log(styles);

/*
3.

Каков результат? Почему?

получает в качестве this объект arr и выводит массив:
*/

let arr = ["a", "b"];

arr.push(function() {
  console.log(( this ))
})

arr[2]();

/*
4.

Сумма введенных чисел

Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
    
    let arr = [];
    let sum = 0;

    while (true) {
        let value = prompt("Введите число");

        if (value == "" || value == null || !isFinite(value)) {
            break;
        } else {
            arr.push(+value);

            sum += +value;            
        }
    }

    return sum;
}

//sumInput();
//console.log(sumInput())

/*
5.

Подмассив набольшей суммы

На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/

let numbers = [1, -2, 3, 4, -9, 6]; //Сумма всех: 3. А на выходе должно быть 7
//let numbers = [1, -2, 3]
function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;

    for (let item of arr) {
        sum += item;

        maxSum = Math.max(maxSum, sum);

        if (sum < 0) {
            sum = 0
        }
    }

    return maxSum;
}

console.log(getMaxSubSum(numbers))
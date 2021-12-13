/*
1. Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

//первый вариант
function printNumbers (from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId)
        }
        
        current++
    }, 1000);
}

//printNumbers(0, 5)

//второй вариант
function printNumbers2 (from, to) {
    let current = from;

    let timerId = setTimeout(function tick () {
        console.log(current)
        if (current < to) {
            setTimeout(tick, 1000)
        }
        current++;
        
    }, 1000)
}

printNumbers2(0, 2)


/*
2. В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
*/

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

/*Любой вызов setTimeout будет выполнен только после того, как текущий код завершится.

Последним значением i будет: 100000000. */

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
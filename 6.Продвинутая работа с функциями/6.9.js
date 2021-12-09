//тема из видео
let fac = function factorial(n) {
    return (n != 1) ? factorial(n - 1) * n : n;
}

let fib = function fibonacchi(n) {
    return (n > 2) ? fibonacchi(n - 1) + fibonacchi(n - 2) : 1;
}

function logResultDecorator (func, funcName) {
    return function () {
        let result = func.apply(this, arguments);
        console.log(`Результат ${funcName} : ${result}`);
    
        return result;
    }
}

function callCountDecorator (func, funcName) {
    let count = 0;

    return function () {
        count++;
        console.log(`Функция ${funcName} была вызвана ${count} раз`);

        return func.apply(this, arguments)
    }
}

function timeDecorator (func, funcName) {
    return function () {
        let startTime = Date.now();
        let result = func.apply(this, arguments);
        let time = Date.now() - startTime;

        console.log(`Функция ${funcName} выполнялась ${time} мс`);

        return result;
    }
}

function cacheDecorator (func) {
    let cache = {};

    return function (n) {
        if (typeof cache[n] === 'undefined') {
            cache[n] = func.apply(this, arguments);
        }

        return cache[n];
    }
}

function argumentsCountDecorator (func, requiredNumber) {
    return function () {
        let argsCount = arguments.length;

        if (requiredNumber !== argsCount) {
            console.log('Количество элементов не совпадает')
            return;
        } 

        return func.apply(this, arguments);
    }
}

fac = logResultDecorator(fac, 'factorial');

fac = cacheDecorator(fac);

fac = callCountDecorator(fac, 'facrotial');

fac = timeDecorator(fac, 'facrotial');

fac = argumentsCountDecorator(fac, 1);
//=======
fib = logResultDecorator(fib, 'fibonacchi');

fib = cacheDecorator(fib);

fib = callCountDecorator(fib, 'fibonacchi');

fib = timeDecorator(fib, 'fibonacchi');

fib = argumentsCountDecorator(fib, 1);



fac(6);
fib(10);
fib(10);
/*
1. Декоратор-шпион
важность: 5
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
*/

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

function spy (func) {
    
    function wrapper (...args) {
        wrapper.calls.push(args);

        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

/*
2. Задерживающий декоратор
важность: 5
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.
*/

function f(x) {
    console.log(x);
}

function delay(func, time) {
    return function() {
        setTimeout(() => func.apply(this, arguments), time)
    }
}

let f1000 = delay(f, 1000);

f1000("test");

/*
3. Декоратор debounce
важность: 5
Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

Например:

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
На практике debounce полезен для функций, которые получают/обновляют данные, и мы знаем, что повторный вызов в течение короткого промежутка времени не даст ничего нового. Так что лучше не тратить на него ресурсы.
*/

function y (x) {
    console.log(x)
}

function debounce(func, time) {
    let isCoolDown = false;

    return function () {
        if (isCoolDown) return;

        func.apply(this, arguments);

        isCoolDown = true;

        setTimeout(() => isCoolDown = false, time);
    }
}

y = debounce(y);

y(1);
y(1);


/*
4. Тормозящий (throttling) декоратор
важность: 5
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.

Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

Давайте рассмотрим реальное применение, чтобы лучше понять это требование и выяснить, откуда оно взято.

Например, мы хотим отслеживать движения мыши.

В браузере мы можем объявить функцию, которая будет запускаться при каждом движении указателя и получать его местоположение. Во время активного использования мыши эта функция запускается очень часто, это может происходить около 100 раз в секунду (каждые 10 мс).

Мы бы хотели обновлять информацию на странице при передвижениях.

…Но функция обновления update() слишком ресурсоёмкая, чтобы делать это при каждом микродвижении. Да и нет смысла делать обновление чаще, чем один раз в 1000 мс.

Поэтому мы обернём вызов в декоратор: будем использовать throttle(update, 1000) как функцию, которая будет запускаться при каждом перемещении указателя вместо оригинальной update(). Декоратор будет вызываться часто, но передавать вызов в update() максимум раз в 1000 мс.

Визуально это будет выглядеть вот так:

Для первого движения указателя декорированный вариант сразу передаёт вызов в update. Это важно, т.к. пользователь сразу видит нашу реакцию на его перемещение.
Затем, когда указатель продолжает движение, в течение 1000 мс ничего не происходит. Декорированный вариант игнорирует вызовы.
По истечению 1000 мс происходит ещё один вызов update с последними координатами.
Затем, наконец, указатель где-то останавливается. Декорированный вариант ждёт, пока не истечёт 1000 мс, и затем вызывает update с последними координатами. В итоге окончательные координаты указателя тоже обработаны.
Пример кода:

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
P.S. Аргументы и контекст this, переданные в f1000, должны быть переданы в оригинальную f
*/

function throlling(a) {
    console.log(a)
}

let f1000 = throttle(throlling, 1000);
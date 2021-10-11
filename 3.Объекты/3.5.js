/*
2

Создание калькулятора при помощи конструктора

Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
*/

function Calculator () {
    this.read = function() {
        this.x = prompt('Число 1');
        this.y = prompt('Число 2');
    },

    this.sum = function() {
        return this.x + this.y;
    },

    this.mul = function() {
        return this.x * this.y;
    }
}

let calculator = new Calculator();


/*
3

Создаем accumulator

Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
*/

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
        this.value += +prompt("число");
    }
}

let accumulator = new Accumulator(5);

console.log(accumulator.value)

accumulator.read();
accumulator.read();


/*
1.

Каким будет результат выполнения этого кода?

Ответ:
Ошибка появляется, потому что точка с запятой пропущена после user = {...}
JavaScript не вставляет автоматически точку с запятой перед круглой скобкой (user.go)(), поэтому читает этот код так:

let user = { go:... }(user.go)();

Обратите внимание, что круглые скобки вокруг (user.go) ничего не значат. Обычно они определяют последовательность операций (оператор группировки), но здесь вызов метода через точку . срабатывает первым в любом случае, поэтому группировка ни на что не влияет. Только точка с запятой имеет значение.
*/

let user = {
    name: "Влад",
    go: function() {
        console.log(this.name)
    }
};

(user.go)()

/*
3.

Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?
*/

function makeUser() {
    return {
        name: "Влад",
        ref: this,
    }
} 

user = makeUser();

//console.log(user.ref.name); //ошибка. this не возвращет текущий объект



/*
4.

Создайте объект calculator (калькулятор) с тремя методами:

- read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
- sum() (суммировать) возвращает сумму сохранённых значений.
- mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

let calculator = {
    read() {
        this.x = +prompt('Первое', 3);
        this.y = +prompt('Второе', 2)
    },

    sum() {
        return this.x + this.y;
    },

    mul() {
        return this.x * this.y;
    }
}
//calculator.read();
//console.log(calculator.sum())
//console.log(calculator.mul())


/*
5.

Цепь вызовов
*/

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
        
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log(this.step);
        return this;
        
    }
};

ladder.up().up().down().showStep();

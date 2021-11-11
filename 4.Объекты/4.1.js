//Литеры и свойства

let user = {
    name: "John",
    age: 30
}

console.log(user.name)

// Значение может быть любого типа. Давайте добавим свойство с логическим значением:

user.isAdmin = true

console.log(user);

// Для удаления свойства мы можем использовать оператор delete:

delete user.age;

console.log(user);

// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:

user = {
    name: "John",
    age: 30,
    "like birds": true
}

console.log(user)

// квадртные скобки

user["new prop"] = false;

console.log(user);



//Свойство из переменной

function makeUser(name, age) {
    return {
        name,
        age
    };
}

let userJohn = makeUser("John", 30)
console.log(userJohn);

// Проверка существования свойства, оператор «in»
console.log("key" in userJohn)


// Цикл «for…in»
for (let key in userJohn) {
    console.log(key)
    console.log(userJohn[key])
}

/*
1.

Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект human.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

let human = {};
human.name = "John";
human.surname = "Smith";
human.name = "Pete";
delete human.name;
console.log(human)

/*
2.

Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/

function isEmpty(obj) {
    for (let prop in schedule) {        
        return false
    }

    return true;
}

let schedule = {};

console.log(isEmpty(schedule))

/*
4.

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let summary = (obj) => {
    let sum = 0;

    for (let prop in obj) {
        sum += obj[prop]
    }

    return sum;
}

console.log(summary(salaries))

/*
5.

Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

let multiplyNumeric = (obj) => {
    for (let prop in obj) {
        
        if (typeof obj[prop] == "number") {
            obj[prop] *= 2;
        }
    }
}

multiplyNumeric(menu)

console.log(menu);
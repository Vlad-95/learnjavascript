/*
1. Создайте дату
важность: 5
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/

let date = new Date(2012, 1, 20, 3, 12)

console.log(date);


/*
2. Покажите день недели
важность: 5
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/

function getWeekDay(date) {
    let dayName = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]

    return dayName[date.getDay()];
}

console.log(getWeekDay(date))

/*
3. День недели в европейской нумерации
важность: 5
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

*/

let euroDate = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay (day) {
    day = date.getDay();

    if (day == 0) {
        day == 7;
    }

    return day;
}
console.log( getLocalDay(euroDate) );       // вторник, нужно показать 2


/*
4. Какой день месяца был много дней назад?
важность: 4
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.

*/

function getDateAgo (funcDate, days) {
    let newDate = new Date(funcDate);
    newDate.setDate(funcDate.getDate() - days);

    return newDate;
}

let hahadate = new Date(2015, 0, 2);

console.log(getDateAgo(hahadate, 1))

/*
5. Последнее число месяца?
важность: 5
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

*/

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2021, 1))
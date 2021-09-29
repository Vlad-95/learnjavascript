/*
1.

Следующая функция возвращает true, если параметр age больше 18.

В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

Будет ли эта функция работать как-то иначе, если убрать else?
*/

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Нельзя')
    }
}

//Оба варианта функций работают одинаково, отличий нет.


/*
2.

Перепешите функцию chekAge, используя оператор "?" или "||"
*/

function checkAgeType2(age) {    
    return (age > 18) ? true : confirm("No");
}

function checkAgeType3(age) {
    return (age > 18) || confirm("No");
}


/*
3.

Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

function getMinNumber (a, b) {
    return (a < b) ? a : b
}

function getMinNumberType2 (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

/*
4.

Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
*/

function getDegreeNumber(x, n) {
    return x**n;
}

function getDegreeNumberType2() {
    let x = prompt('Введите число', '');
    let n = prompt('Введите степень', '');

    if ((x > 0) && n > 0) {
        return x**n;
    } else {
        return false
    }
}
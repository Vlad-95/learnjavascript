console.log('\u00A9');
console.log('str'.length);

console.log("str".lastIndexOf("r", 2))

console.log("Hello".includes("lO"));
console.log("HELLO".substring(4, 1))

/*
1.

Сделать первый символ заглавным

Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
*/

function ucFirst(str) {
    let firstChar = str[0].toUpperCase();

    let newStr = firstChar + str.slice(1);

    return newStr;
}

console.log(ucFirst("влад"))


/*
2.

Проверка на СПАМ


Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:
*/

function checkSpam(str) {
    let inputStr = str.toLowerCase();
  
    if (inputStr.includes("viagra") || inputStr.includes("xxx")) {
        return true
    } else {
        return false
    }

    
}

console.log(checkSpam("but XXX"))


/*
3.

Усечение строки

Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
*/

function truncate (str, maxlength) {
    return (str.length > maxlength) ? str.substring(0, maxlength) + '…' : str
}

console.log(truncate("Влад", 2))


/*
4.

Выделить число

Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
*/

function extractCurrencyValue(str) {
    let number = str.slice(1)

    return +number
}

console.log(extractCurrencyValue("$120"))
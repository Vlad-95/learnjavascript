/* 
Строковое преобразовние
*/

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value)

/*
Численное преобразование
*/

console.log("6" / "3");

let str = "123";
console.log(typeof str);

let num = Number(str);
console.log(typeof num);

console.log(Number("    123   "));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

/*
Логическое преобразование
*/

console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("Привет"));
console.log(Boolean(""));
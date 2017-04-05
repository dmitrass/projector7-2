
// Простые типы 2
var myNumber = 3232,
myString = "String",
myBool = true,
myNull = null,
myUndef = undefined;

console.log(myNumber);
console.log(myString);
console.log(myBool);
console.log(myNull);
console.log(myUndef);

// Объектные типы 2
var obj = {name:"dima"},
array = [1,2,3],
regexp = /w+/g,
func = function () {};

console.log("");
console.log(obj);
console.log(array);
console.log(regexp);
console.log(func);

obj.name = "another name";
array[1] = 3333;

console.log(array);

console.log(myString.toUpperCase());
console.log(myString);

var a, b, c, d;
a = b = c = d = 5;

// Объектные методы 3
var N = new Number(25), /* Конструктор Number (числовой тип) */
n = 5000;
console.log(typeof N);
console.log(typeof n);
console.log(typeof 2);


console.log(N.toFixed(2)); /* Метод формы с плавающей точкой с количеством знаков после запятой */
console.log(n.toFixed(2));
console.log(2 .toFixed(2)); /* Метод формы с плавающей с числовым литералом (с пробелом после литерала) */
console.log(n.toExponential(4));
console.log(n.toPrecision(8));

// Унарные операторы инкременты и декремента (увеличивают и меньшают значения переменной на 1)
console.log(+10); /* префиксный инкремент */
console.log(-10); /* префиксный декремент */

var i = 10;
console.log(++i); /* префиксный инекремент сначала увеличивает значение на 1, после возвращает*/
console.log(i);
console.log(i++); /* постриксный инекремент сначала возвращает значени, после увеличивает переменной на 1*/
// после выполнения переменной будет больше 1+1

// Арифметические операторы 4
console.log(5 + 10);
console.log(5 - 10);
console.log(5 * 10);
console.log(5 / 10);
console.log(5 % 10); /* остаток от деления символом % */
console.log(i);

// Арифметические операторы с присваиванием
var n = 100;
n = n + 20;
console.log(n);
n = n * 2;
console.log(n);

// Такие же операторы, только короче +=,-=,*=,/=
n += 20;
console.log(n);
n *= 2;
console.log(n);

// Операторы отношения
console.log(5 > 10); /* Истинность выражения (true,false) */
console.log(5 < 10);
console.log(10 >= 10);
console.log(8 <= 10);
console.log(10 === 10); /* С учетом равенства истинность выражения (true,false) */
console.log(10 !== 10); /* С учетом равенства истинность выражения (true,false) */

// Объект Math (предоставляет методы для сложных математических операций)
console.log(Math.sqrt(25)); /* Извелечение квадратного корня */
console.log(Math.pow(3,5)); /* Возведение в степень */
console.log(Math.PI); /* Костанты */
console.log(Math.E); /* Константы */

// Числовой литерал бесконечноть
console.log(Infinity*5); /* Имеет тип ""число */
console.log(Infinity+5);
console.log(Infinity*Infinity);
console.log(NaN === NaN);

// Строковые литералы 6
console.log("Одинарные и двойные кавычки");
console.log("Hello there".length);

console.log("Some 'long' sntring");
console.log("Another \"very \\ long\" string"); /* Изолирует выражение */

var string = "Sometimes the same is different";
console.log(string.length);
console.log(string.charAt(string.length + 1));
console.log(string.substring(10)); /* Возвращает количество символов из строки */
console.log(string.substring(10,21));
console.log(string.slice(+10));
console.log(string.slice(-10)); /* Возвращает символы начала или конца из строки */
console.log(string.substr(14,4)); /* Номер возвращаемого символа строки и количество символов */
console.log(string.indexOf("me")); /* Поиск подстроки в строке */
console.log(string.lastIndexOf("me")); /* Поиск подстроки в строке с конца*/
console.log(string.replace("is","is not")); /* Заменяет подстроку в исходной строке */
console.log(string);
string = string.replace("is","is not"); /* Заменяет подстроку в исходной строке не изменяя исходную строку*/
console.log(string); /* Заменяет подстроку в исходной строке */
console.log(string.split(" ")); /* Разбивает строку на массив элементами разделителя в кавычках */
console.log(string.toUpperCase(" ")); /* Метод приведения к верхнеу регистру */
console.log(string.toLowerCase(" ")); /* Метод приведения к нижнему регистру */

/* В JavaScript 5 строки могут интерпретироваться как массивы поэтому:*/
console.log(string[4]); /* Вместо метода charAt (возвращает символ с определенным индексом)*/

// Булевый тип данных (true/false)

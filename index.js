// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"
// const userInput = prompt('Какое официальное название JavaScript?');
// let message = 'Не знаете? ECMAScript!';
// userInput === 'ECMAScript' ? (message = 'Верно!') : message;
//Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
//
// 70 === 01:10
// str.padStart(targetLength[, padString])
// const time = prompt("enter time");
// let hours = Math.floor(Number(time) / 60);
// let minutes = Number(time) % 60;
// hours = String(hours).padStart(2, '0');
// minutes = String(minutes).padStart(2, '0');
// console.log(`${hours}:${minutes}`);
// /3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let totalSum = 0;
// for (let i = max; i >= min; i -= 1) {
//     // if (i % 2 === 0) {
//     //     totalSum += i;
//     // }
//     if (i % 2 !== 0) {
//         continue;
//     }
//     totalSum += i;
// }
// console.log(totalSum);

//Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"
// 8. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).
let min = prompt('enter numner 0-60');

// let ask = prompt('');
// console.log(ask);
// if (ask === "Админ") {
// prompt()
// }
if (min <= 15) {
    console.log('1 quater');
}
else if (min > 15 && min <= 30) {
    console.log('2 quater');
}
else if (min > 30 && min <= 45) {
    console.log('3 quater');

}
else console.log('4 quater');

// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const userInput = prompt("Какое официальное название JavaScript?");
// if (userInput === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }
// let message = "Не знаете? ECMAScript!";
// userInput === "ECMAScript" ? (message = "Верно!") : message;
// alert(message);

//Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const time = prompt("Введи хвилини");
// let hours = Math.floor(Number(time) / 60);
// let minutes = Number(time) % 60;

// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");

// console.log(`${hours}:${minutes}`);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
const max = 50;
const min = 23;
let totalSum = 0;

for (let i = max; i >= min; i -= 1) {
  //   if (i % 2 === 0) {
  //     totalSum += i;
  //   }
  if (i % 2 !== 0) {
    continue;
  }
  totalSum += i;
}
console.log(totalSum);

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
// 

// 8. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).
let min = 32;
if (min <= 15)
{
  console.log("перша четверть")
  
}
else if (min > 15 && min <= 30)
{
  console.log("2 четверть")
}
else if (min > 30 && min <= 45)
{
  console.log("3 четверть")
}
else {
  console.log("4 четверть")
  }

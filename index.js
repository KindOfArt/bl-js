// // Используя функцию if...else,
// //напишите код, который будет спрашивать:
// //"Какое официальное название JavaScript?"
// //Если пользователь вводит "ECMAScript",
// //то показать через alert: "Верно!"
// //в противном случае отобразить:"Не знаете? ECMAScript!"

// // const userInput = prompt("Какое официальное название JavaScript?");
// // if (userInput === "ECMAScript") {
// //   alert("Верно!");
// // } else {
// //   alert("Не знаете? ECMAScript!");
// // }
// // let message = "Не знаете? ECMAScript!";
// // userInput === "ECMAScript" ? (message = "Верно!") : message;
// // alert(message);

// //Напишите программу, которая получит от пользователя
// //число (количество минут) и выведет в консоль
// //строку в формате часов и минут
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// // 70 === 01:10

// // const time = prompt("Введи хвилини");
// // let hours = Math.floor(Number(time) / 60);
// // let minutes = Number(time) % 60;

// // hours = String(hours).padStart(2, "0");
// // minutes = String(minutes).padStart(2, "0");

// // console.log(`${hours}:${minutes}`);

// //3. Напишите цикл, который выводит в консоль
// //числа от max до min по убыванию
// // Додайте все четные числа от min до max
// //

// // 8. В переменной min лежит число от 0 до 59.
// // Определите в какую четверть часа попадает
// // это число(в первую, вторую, третью или четвертую).
// // let min = 32;
// // if (min <= 15)
// // {
// //   console.log("перша четверть")

// // }
// // else if (min > 15 && min <= 30)
// // {
// //   console.log("2 четверть")
// // }
// // else if (min > 30 && min <= 45)
// // {
// //   console.log("3 четверть")
// // }
// // else {
// //   console.log("4 четверть")
// //   }
// //Напишите код, который будет спрашивать
// //логин с помощью prompt и логировать результат
// //в консоль браузера

// //Если посетитель вводит "Админ",
// //то prompt запрашивает пароль.
// //Если ничего не ввели или нажата клавиша Esc
// //вывести стороку "Отменено"
// //В противном случае вывксти строку "Я вас не знаю"

// //Пароль проверять так:
// //Если введён пароль "Я главный",
// //то вывести строку "Здравствуйте!"
// //иначе выводить строку "Неверный пароль!"
// // let askLogin = prompt('login');

// //if (askLogin === 'Админ') {
// //  console.log(askLogin);
// //const askPass = prompt('pass');
// //if (askPass === "Я главный") {
// //  console.log('Здравствуйте!');
// //}
// //else if (askPass === null) {
// //  console.log('Отменено');
// //}
// //else console.log('Неверный пароль!');
// //} else if (askLogin === null) {
// //console.log('Отменено');
// //} else {
// // console.log('Я вас не знаю');
// //}
// // switch (askLogin) {

// //   case 'Админ':
// //   const askPass = prompt('pass')
// //     switch (askPass) {
// //       case "Я главный":
// //         console.log('Здравствуйте!');
// //         break
// //       case null:
// //         console.log('Отменено');
// //         break
// //       default:console.log('Неверный пароль!');
// //     }
// //    break;

// //     case null:
// //   console.log('Отменено');
// //     break;
// //   default:
// //      console.log('Я вас не знаю');
// // }

// // ------------------------------------------------------------------------
// // При загрузке страницы пользователю предлагается
// //в prompt ввести число. Ввод добавляется к значению
// //переменной total.
// //Операция ввода числа продолжается до тех пор,
// //пока пользователь не нажмет кнопку Cancel в prompt.
// //После того как пользователь прекратил ввод нажав на
// //кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
// //Делать проверку,что пользователь ввел именно число,
// // //а не произвольный набор символов, не нужно.

// // let number = prompt('Enter number');
// // let total = 0;
// // while (number) {
// //   total += Number(number);
// //   number = prompt('Enter number');
// // }
// // console.log(total);

// // --------------------7 ------------

// //7. Напишите цикл, который предлагает ввести
// //число больше 100 через prompt.
// //Если посетитель ввёл другое число - попросить
// //ввести ещё раз и так далее.
// //Цикл должет спрашивать число, пока посетитель не
// //введёт число больше 100, либо не нажмет кнопку
// //Отмена в prompt

// //     let randomNumber = prompt("Число быльше 100");
// // while (randomNumber < 100 && randomNumber !== null) {
// //     randomNumber = prompt("Число быльше 100");
// // }
// // console.log(randomNumber);

// //Дана строка, состоящая из символов, например, 'abcde'.
// // Проверьте, что первым символом этой строки является буква 'a'.
// // Если это так - выведите 'да', в противном случае выведите 'нет'.

// // const string = "abcde";

// // console.log(string[0]);
// // if (string[0] === "a") {
// //     console.log("Так");
// // } else {
// //     console.log("Ні!");
// // }
// // const firstLetter = string[0]
// // let message = "Ні!"
// // firstLetter === "a" ? message = "Так." : message
// // console.log(message);

// // const firstLetter = string.startsWith("a")
// // firstLetter ? message = "Так." : message
// // console.log(message);
// // Елси число делиться на 3 возвращать
// //fizz если делиться на 5 возвращать buzz
// //елси делиться на 3 и на 5 возвращить fizzbuzz
// // function fizzBuzz(num) {
// //      for (let i = 1; i <= num; i++) {
// //            }

// // }
// // Елси число делиться на 3 возвращать
// //fizz если делиться на 5 возвращать buzz
// //елси делиться на 3 и на 5 возвращить fizzbuzz
// // =============================================================================
// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(125);
// // =============================================================================
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

const styles = ['Джаз', 'Блюз'];

console.log(styles.push('«Рок-н-ролл»'));

const index = styles.indexOf('Блюз');

styles.splice(index, 1, 'Классика');

console.log(styles.shift());

styles.unshift('Реп', 'Регги');

// styles[1] = 'Классика';

console.log(styles);

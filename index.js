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

// const styles = ['Джаз', 'Блюз'];

// console.log(styles.push('«Рок-н-ролл»'));

// const index = styles.indexOf('Блюз');

// styles.splice(index, 1, 'Классика');

// console.log(styles.shift());

// styles.unshift('Реп', 'Регги');

// // styles[1] = 'Классика';

// console.log(styles);

//======================
//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

// function min(a, b) {
//   return Math.min(a, b);
// }

// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else if (a < b) {
//     return a;
//   } else {
//     return 'Они равны';
//   }
// }

// function min(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a > b ? b : a;
//   } else return 'error';
// }

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'error';
//   } else {
//     return a > b ? b : a;
//   }
// }

// console.log(min('5454', 9));

//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
//['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']);

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   return Math.min(...numbers)
// }

// console.log(findSmallerNumber((numbers)));

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return 'Error, not Array'
//   }
//   let minNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < minNumber) {
//       minNumber = number;
//     }

//   }
//   return minNumber;
// }

// console.log(findSmallerNumber(56692));
// Напишите функцию caculculateAverage()
// //которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// const caculculateAverage = function (...arks) {
//   let total = 0
//   for (const number of arks) {

//     if (typeof number !== "number") {
//       continue
//     }
//       total += number
//   }
//     return total / arks.length
//   }

// console.log(caculculateAverage(1, 2, 3));

// /////////////////////////////

//Напиши функцию findLongestWord(string)
//которая принимает произвольную строку
//состоящую только из слов разделенных
//пробелом (параметр string)
//и возвращает самое длинное слово в этой строке

// function findLongestWord(string) {
//     const words = string.split(" ");
//     let longestWord = words[0];

//     console.log(words);

//     for (const word of words) {
//     if (longestWord.length < word.length) {
//         longestWord = word;
//     }
// }
// return longestWord;
// }

// console.log(findLongestWord("Hello world from student GOIT"));
// =====================================
//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
// const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon'];
// findTheColor('black');

// function findTheColor(color) {
//   const inArr = colors.includes(color);
//   if (inArr) {
//     document.body.style.background = color;
//     return;
//   }

//   document.body.style.background = 'red';
//   console.error('Такой цвет не найден');
// }

// ====================================================================
//Напишите функцию unique(arr), которая возвращает массив,
//содержащий только уникальные элементы arr.
// const words = [
//   'HTML',
//   'CSS',
//   'JS',
//   'React',
//   'JS',
//   'CSS',
//   'JS',
//   'Node.js',
//   'JS',
//   'React',
//   'CSS',
//   'React',
//   'HTML',
//   'Node.js',
// ];

// function unique(arr) {
//   const newArr = [];
//   for (const word of arr) {
//     if (!newArr.includes(word)) {
//       newArr.push(word);
//     }
//   }
//   return newArr;
// }
// console.log(unique(words));
// ===============================================================================================================
// function unique(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.indexOf(arr[i]) === i) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(unique(words));
// =================================================================================================================
// function getUnique(arr) {
//   return arr.filter((element, index, arr) => arr.indexOf(element) === index);
// }
// console.log(getUnique(words));
// =====================================================================================================================

// function ownMap(array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     newArray.push(callback(array[i]));
//   }

//   return newArray;
// }

// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = ownMap(planets, planet => planet.toUpperCase());
// console.log('planetsInUpperCase', planetsInUpperCase);

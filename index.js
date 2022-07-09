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
// let min = prompt('enter numner 0-60');

// let ask = prompt('');
// console.log(ask);
// if (ask === "Админ") {
// prompt()
// }
// if (min <= 15) {
//     console.log('1 quater');
// }
// else if (min > 15 && min <= 30) {
//     console.log('2 quater');
// }
// else if (min > 30 && min <= 45) {
//     console.log('3 quater');

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

// ======================================================

// function ownFilter (arr, callback) {
//     const newValues = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (callback(arr[i], i, arr)) {
//             newValues.push(arr[i]);
//         }
//     }
//     return newValues;

// }
// const values = [51, -3, 27, 100500, 21, 68, -42, -37, 100001];

// const positiveValues = ownFilter(values, (value) => {
// return value > 0;

//     // console.log(value);
//     // console.log(index);
//     // console.log(arr);
// });
// console.log(positiveValues)

// ======================================================
// function ownFind(array, callback) {
//     for (let i = 0; i < array.length; i += 1) {
//         if (callback(array[i], i, array)) {
//             return array[i]
//         };
//     }
//     return undefined;
// }


// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];
// console.log(ownFind(colorPickerOptions, (option) => { return (option.label === 'blue'); }));


// ==============================================================================


// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//     { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//     { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//     { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//     { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
// //1.Реализовать фильтер по свойству amount и получить
// //только название модели
// const getAvailableCarNames = (cars, amount) => {
//     console.log(cars);
//     console.log(amount);
//     const filterCars = cars.filter(car => car.amount >= amount).map(car => car.model)
//     console.log(filterCars);
// }
// getAvailableCarNames(vehicles, 10)
//Получить машины на распродаже и сортировать по убыванию цены

const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

const getSortedCarsOnSale = cars => {
    return cars.filter(element => element.onSale).sort((a,b) => b.price - a.price)
};

console.log(getSortedCarsOnSale(vehicles ));
console.log(getSortedCarsOnSale(vehicles ));


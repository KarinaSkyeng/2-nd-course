// 1 Преобразуйте строку js в верхний регистр JS.

let str = 'js';
str = str.toUpperCase();
console.log(str);

// 2 
function filterWords(words, search) {
    return words.filter((word) => word.toLowerCase().startsWith(search.toLowerCase()));
}

const words = ['Сметана', 'Хор', 'Стена', 'Хорошо', 'Картина', 'Хоровод', 'Лошадь'];
const search = 'хо';

const result = filterWords(words, search);
console.log(result);

//3 Округлите число 32.58884
let decimalNumber = 32.58884;

let roundedNumber = Math.round(decimalNumber); 
console.log(roundedNumber);

let roundedLessNumber = Math.floor(decimalNumber);
console.log(roundedLessNumber);

let roundedMoreNumber = Math.ceil(decimalNumber);
console.log(roundedMoreNumber);

// 4
const numbers = [52, 53, 49, 77, 21, 32];

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log(`Наименьшее число: ${minNumber}`);
console.log(`Наибольшее число: ${maxNumber}`);

// 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10));

 // 6
function getRandomArrNumbers(maxNumber) {
    const arrayLength = maxNumber / 2;
    return Array.from({length: arrayLength }, () => Math.floor(Math.random() * (maxNumber + 1)));
}

console.log(getRandomArrNumbers(10));

//  7
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getRandomNumber(3, 9);
console.log(randomNum);

// 8 
let myDate = new Date();
console.log(myDate);

// 9
let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// 10

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  let greatDate = new Date();
  let fullDate = "Дата: " + greatDate.getDate() + " " + months[greatDate.getMonth()] + " " + greatDate.getFullYear() + "- это " + days[greatDate.getDay()];
  
  let hour = greatDate.getHours();
  let minute = greatDate.getMinutes();
  let second = greatDate.getSeconds();
  let fullTime = "Время: " + hour + ":" + minute + ":" + second;
  
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  console.log(fullDate);
  console.log(fullTime);

  // 11

  function rememberWord() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);

    alert(words.join(', '));

    let userFirstGuess = prompt('Чему равнялся первый элемент массива?');
    let userLastGuess = prompt('Чему равнялся последний элемент массива?');

    if (userFirstGuess.toLowerCase() === words[0].toLowerCase() && userLastGuess.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert('Поздравляем! Вы угадали оба элемента.');
    } else if(userFirstGuess.toLowerCase() === words[0].toLowerCase() || userLastGuess.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно.');
    }
  }
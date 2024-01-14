// 1
const arr = [1, 5, 4, 10, 0, 3];

for (let value of arr) {
    console.log(value);
    if (value === 10) {
        console.log("Найдено значение 10");
        break;
    }
 }

// 2
const numbs = [1, 5, 4, 10, 0, 3];
const targetNumber = 4;
const index = numbs.indexOf(targetNumber);
console.log(`Индекс числа ${targetNumber}: ${index}`);

// 3
const numbers = [1, 3, 5, 10, 20];
const result = numbers.join(' ');
console.log(result);

//4
const userArr = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for (let j= 0; j < 3; j++) {
        innerArr.push(1);
    } 
    userArr.push(innerArr);
}
console.log(userArr)

// 5
const numbs1 = [1, 1, 1];
numbs1.push(2, 2, 2);
console.log(numbs1);

// 6
const num = [9, 8, 7, 'a', 6, 5];
num.sort((a, b) => a - b).pop();
console.log(num);

// 7 
const numbers1 = [9, 8, 7, 6, 5];

    const userNumber = prompt("Угадайте число");
    if (numbers1.includes(parseInt(userNumber))) {
        alert("Угадал");
    } else {
        alert("Не угадал");
    }

// 8
const string = 'abcdef';
const reversedString = string.split('').reverse().join('');
console.log(reversedString);

// 9
const getArr = [[1, 2, 3,],[4, 5, 6]];
const flatArr = getArr.flat();
console.log(flatArr);

// 10
const numbersArray = [2, 8, 4, 7, 1, 6, 9, 3, 5, 10];
    for (let i = 0; i < numbersArray.length - 1; i++) {
       console.log(numbersArray[i] + numbersArray[i + 1]);
}

// 11
function squareNumbers(nums) {
    const squares = nums.map((number) => number ** 2);
    return squares;
}

const inputArray = [1, 2, 3, 4, 5];
const resultArray = squareNumbers(inputArray);
console.log(resultArray);

// 12
function getLengthWords(words) {
    const wordLength = words.map((word) => word.length);
    return wordLength;
}

const inputArray1 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const resultArray1 = getLengthWords(inputArray1);

console.log(resultArray1);

// 13
function filterPositive(array) {
    const negativeValues = array.filter((value) => value < 0);
    return negativeValues;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// Необязательные задания: 14
const originalArray = Array.from({length: 10}, () => Math.floor(Math.random() * 11));

function filterEven(value) {
    return value % 2 === 0;
}

const evenArray = originalArray.filter(filterEven);

console.log('Исходный массивв', originalArray);
console.log('Массив с четными значениями:', evenArray);

// 15
const array = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum / array.length;

console.log('Исходный массив:', array);
console.log('Среднее арифметическое:', average);
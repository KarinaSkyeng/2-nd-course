// 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i= 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        console.log("Найдено значение 10");
        break;
    }

    console.log(arr[i]);
}

// 2
let numbs = [1, 5, 4, 10, 0, 3];
let targetNumber = 4;
let index = numbs.indexOf(targetNumber);

console.log(`Индекс числа ${targetNumber}: ${index}`);

// 3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');

console.log(numbers);

//4


// 5
let numbs1 = [1, 1, 1];
numbs1.push('2, 2, 2');

console.log(numbs1);

// 6
let massiv = [9, 8, 7, 'a', 6, 5];

massiv.sort((a, b) => a - b);

let filteredMassiv = massiv.filter(item => !isNaN(item));
console.log(filteredMassiv);

// 7 
let numbers1 = [9, 8, 7, 6, 5];

    let userNumber = prompt("Угадайте число");
    if (numbers1.includes(parseInt(userNumber))) {
        alert("Угадал");
    } else {
        alert("Не угадал");
    }

// 8
let string = 'abcdef';

let reversedString = string.split('').reverse().join('');

console.log(reversedString);

// 9
let multiMassiv = [[1, 2, 3,],[4, 5, 6]];

let flatMassiv = multiMassiv.flat();

console.log(flatMassiv);

// 10
let numbersArray = [2, 8, 4, 7, 1, 6, 9, 3, 5, 10];

for (let i = 0; i < numbersArray.length - 1; i++) {

    let currentElement = numbersArray[i];
    let nextElement = numbersArray[i + 1];

    let sum = currentElement + nextElement;
    console.log(`Сумма элементов ${currentElement} и ${nextElement}: ${sum}`);
}

// 11
function squareNumbers(numbers) {

    let squares = numbers.map((number) => number ** 2);
    return squares;
}

let inputArray = [1, 2, 3, 4, 5];
let resultArray = squareNumbers(inputArray);

console.log(resultArray);



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
let rows = 3;
let columns = 3;
let multiArray = [];

for (let i = 0; i < rows; i++) {
    let row = [];

    for (let i = 0; j < columns; j++) {
        row.push(1);
    }
}





// 6
let massiv = [9, 8, 7, 'a', 6, 5];

massiv.sort((a, b) => a - b);

let filteredMassiv = massiv.filter(item => !isNaN(item));
console.log(filteredMassiv);






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
const numbs = [1, 5, 4, 10, 0, 3];
const targetNumber = 4;
const index = numbs.indexOf(targetNumber);

console.log(`Индекс числа ${targetNumber}: ${index}`);

// 3



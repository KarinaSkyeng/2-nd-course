// 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

console.log(people.sort(function(a, b) {return a.age - b.age}));

// 2
function isPositive(value) {
    return value > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));

// 3
const timer = () => {
    let secondsPassed = 0;

    const interval = setInterval(() => {
        console.log(new Date().toLocaleString());
        secondsPassed += 3;

        if (secondsPassed >= 30) {
            clearInterval(interval);
            console.log('30 секунд прошло');
        }
    }, 3000);
};

timer();

// 4
function delayForSecond(callback) {
    setTimeout(function () {
        callback();
    }, 1000);    
}
 
 delayForSecond(function() {
    console.log('Привет, Глеб!');
 });

// 5 
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb();}
    }, 1000);        
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
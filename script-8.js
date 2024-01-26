// 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
people.sort(function (a,b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }

    return 0;
});

console.log(people.sort());

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
const timer = (timerId) => {
    const interval = setInterval(() => {
        console.log(timerId);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, 30000)
};

timer(3);

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
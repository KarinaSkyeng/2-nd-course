// 1
let a = 10;
alert(a);
a = 20;
alert(a);

// 2
let yearOfFirstiPhone = 2007;
alert(yearOfFirstiPhone);

// 3
let creatorOfJavaScript = "Brendan Eich";
alert(creatorOfJavaScript);

// 4
let num1_1 = 10;
let num2_1 = 2;
alert("Sum: " + (num1_1 + num2_1)); // Сумма
alert("Subtraction: " + (num1_1 - num2_1)); //Разность (вычитание)
alert("Multiplication: " + (num1_1 * num2_1)); //Произведение (умножение)
alert("division: " + (num1_1 / num2_1)); //Частное (деление)

// 5
let num1_2 = 2;
let num2_2 = 5;
alert("result: " + (num1_2 ** num2_2));

// 6
let a_1 = 9
let b = 2
alert("Remainder of division: " + (a_1 % b)); // Остаток от деления

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8
let age = prompt('Сколько вам лет?');
alert(age);

// 9
let user = {
    name: "Karina",   
    age: 44,         
    isAdmin: true    
  };

  console.log(user);

// 9.1
user["city Of Residence"] = "Oviedo";
console.log("User after task 9.1:", user);

// 9.2
user.age = 30;
console.log("User after task 9.2:", user);

// 9.3
delete user["city Of Residence"];
console.log("User after task 9.3:", user);

// 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
console.log("User after task 9.4:", user);

// 10
let userName = prompt ("Введите Ваше имя");
alert(`Привет, ${userName}!`)

// hw-3
// 1

let correctPassword = 'пароль';

let userInput = prompt('Введите пароль:');

if (userInput === correctPassword) {
  console.log('Пароль введен верно');
} 
else {
  console.log('Пароль введен неправильно');
}

  // 2

  let c;

  c = 0;
  if (c > 0 && c < 10) {
    console.log('Верно');
  } 
  else {
    console.log('Неверно');
  }

  c = 10;
if (c > 0 && c < 10) {
  console.log('Верно');
} 
else {
  console.log('Неверно');
}

c = -3;
if (c > 0 && c < 10) {
  console.log('Верно');
} 
else {
  console.log('Неверно');
}

c = 2;
if (c > 0 && c < 10) {
  console.log('Верно');
} 
else {
  console.log('Неверно');
}

// 3

let d = 80;
let e = 120;

if (d > 100 || e > 100) {
  console.log('Верно');
} 
else {
  console.log('Неверно');
}

// 4
let a_2 = '2';
let b_2 = '3';

alert(Number(a_2) + Number(b_2));

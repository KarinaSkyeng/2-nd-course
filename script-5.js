 // 1
 function minNumber (a, b) {
    return Math.min (a, b);
 }

 console.log(minNumber(8, 4));
 console.log(minNumber(6, 6));

 //2
 function evenOrOdd(number) {

  if (number % 2 === 0) {
    return `Число четное`;
  } else {
    return 'число не четное';
  }
 }

 console.log(evenOrOdd(6));
 console.log(evenOrOdd(5));

 // 3
 function squaredNumber(number) {
    console.log (number * number);
 }

 squaredNumber(4);

 function calculateSquare(number) {
    return number * number;
 }

 let result = calculateSquare(4);
 console.log(result);

 // 4
 function userAge() {
  let age = prompt("Сколько вам лет?");

  if (!age || !age.trim()) {
    alert("Вы не ввели возраст!");
}
  else if (isNaN(age) || age === null) {
      console.log("Вы ввели неправильное значение");    
  }
    else {
      age = Number(age);

      if (age < 0) {
          alert("Вы ввели неправильное значение");
      } 
      
      else if (age <= 12) {
          alert("Привет, друг!");
      }
      
      else {
        alert("Добро пожаловать!");
      }
          
    }
 }

 userAge();

 // 5
 function multiplyNumbers(a, b) {
  
  if (isNaN(a) || isNaN(b)) {
      return 'Одно или оба значения не являются числом';
  } else {      
      return a * b;
  }
}

console.log(multiplyNumbers(5, 10)); 
console.log(multiplyNumbers("abc", 10));

// 6
function cubeNumber() {
  let num;

  do {
    let userInput = prompt("Введите число:");

    if (userInput === null) {
      console.log('Операция отменена');
      return;
    }

    num = Number(userInput);

    if (!isNaN(num)) {      
      break;
    } else {
      console.log('Введенное значение не является числом');
    }
  } 
      
      while (true); 
      
      let result = num ** 3;
      console.log(`${num} в кубе равняется ${result}`);
}

cubeNumber();

// 7
  function getArea() {
    return Math.PI * this.radius ** 2;
  }
  
  function getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  let circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
  };

  let circle2 = {
    radius: 8,
    getArea: getArea,
    getPerimeter: getPerimeter
  };

console.log("Площадь circle1:", circle1.getArea());
console.log("Периметр circle1:", circle1.getPerimeter());

console.log("Площадь circle2:", circle2.getArea());
console.log("Периметр circle2:", circle2.getPerimeter());

// 8 
function getSeason() {
    let month = prompt("Введите число");
    if (month >= 1 && month <= 12) {
        alert ("Зима");
      if (month >= 3 && month <= 5) {
        alert("Весна");
      } else if (month >= 6 && month <= 8) {
        alert("Лето");
      } else if (month >= 9 && month <= 11) {
        alert("Осень");
      } 
    } else {
      alert("Неправильный номер месяца");
    }
}

console.log(getSeason());
   

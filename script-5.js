 // 1
 function minNumber (a, b) {
    return Math.min (a, b);
 }

 console.log(minNumber(8, 4));
 console.log(minNumber(6, 6));

 //2
 function evenOrOdd(number) {

  if (number % 2 == 0) {
    return `Число четное`;
  }
    
  else {
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

  if (isNaN(age) || age === null) {
      console.log("Вы ввели неправильное значение");    
  }
    else {
      age = parseInt(age);

      if (age < 0) {
          console.log("Вы ввели неправильное значение");
      } 
      
      else if (age <= 12) {
          console.log("Привет, друг!");
      }
      
      else {
        console.log("Добро пожаловать!");
      }
          
    }
 }

 userAge();

 // 5
 function multiplyNumbers(num1, num2) {
  
  if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
  } else {      
      return num1 * num2;
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

    num = parseFloat(userInput);

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
let circle1 = {
  radius: 5,
  getArea: function () {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  }
};

let circle2 = {
  radius: 8,
  getArea: function () {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  }
};

console.log("Площадь circle1:", circle1.getArea());
console.log("Периметр circle1:", circle1.getPerimeter());

console.log("Площадь circle2:", circle2.getArea());
console.log("Периметр circle2:", circle2.getPerimeter());

// 8 
document.addEventListener("DOMContentLoaded", function () {
    const playSeasonButton = document.getElementById("playSeasonButton");
    if (playSeasonButton) {
        playSeasonButton.addEventListener("click", playSeasonGame);
    } else {
        console.error("Кнопка 'Играть!' не найдена");
    }
});

function getSeason(month) {
    if (month >= 1 && month <= 12) {
      if (month >= 3 && month <= 5) {
        return "Весна";
      } else if (month >= 6 && month <= 8) {
        return "Лето";
      } else if (month >= 9 && month <= 11) {
        return "Осень";
      } else {
        return "Зима";
      }
    } else {
      return "Неправильный номер месяца";
    }
}
   
function playSeasonGame() {
    const monthInput = document.getElementById("monthInput").value;
    const season = getSeason(parseInt(monthInput));
    const resultText = document.getElementById("resultText");
    if (resultText) {
        resultText.textContent = `Месяц ${monthInput} относится к времени года: ${season}`;
    } else {
        console.error("Элемент 'resultText' не найден");
    }
}
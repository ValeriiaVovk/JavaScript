/*Функція для вибору кольору, в залежності від величини значення*/

function getColor(value, minMax) {
  if (value < minMax[0]) {
    return "rgb(110, 0, 0)";
  } else if (value >= minMax[0] && value < minMax[1]) {
    return "rgb(150, 0, 0)";
  } else if (value >= minMax[1] && value < minMax[2]) {
    return "rgb(180, 0, 0)";
  } else if (value >= minMax[2] && value < minMax[3]) {
    return "rgb(210, 0, 0)";
  } else if (value >= minMax[3] && value < 0) {
    return "rgb(255, 0, 0)";
  } else if (value >= 0 && value < minMax[4]) {
    return "rgb(0, 255, 0)";
  } else if (value >= minMax[4] && value < minMax[5]) {
    return "rgb(0, 210, 0)";
  } else if (value >= minMax[5] && value < minMax[6]) {
    return "rgb(0, 180, 0)";
  } else if (value >= minMax[6] && value < minMax[7]) {
    return "rgb(0, 150, 0)";
  } else if (value >= minMax[7]) {
    return "rgb(0, 110, 0)";
  }
}

/*Створюємо нові елементи, присвоюємо їм класи, щоб записати результати дій над числами, введених користувачем */
let newP = document.createElement("p");
newP.classList.add("paragraph");
container.appendChild(newP);

let sumP = document.createElement("p");
sumP.classList.add("addition");
container.appendChild(sumP);

let subP = document.createElement("p");
subP.classList.add("subtraction");
container.appendChild(subP);

let mulP = document.createElement("p");
mulP.classList.add("multiplication");
container.appendChild(mulP);

let divP = document.createElement("p");
divP.classList.add("division");
container.appendChild(divP);

/*Змінена функція з файлу уроку 24 з проведеними діями над числами */

function numberOperations() {
  let firstNumber = prompt("Введіть перше число");
  let secondNumber = prompt("Введіть друге число");

  if (firstNumber === "" || secondNumber === "") {
    let element = document.querySelector(".paragraph");
    element.textContent = "Помилка в обчисленнях";
    return;
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    let element = document.querySelector(".paragraph");
    element.textContent = "Помилка в обчисленнях";
    return;
  }

  let addition = Number(firstNumber) + Number(secondNumber);
  let element = document.querySelector(".addition");
  element.textContent = `Сума чисел: ${addition}`;
  element.style.color = getColor(
    addition,
    [-5000, -1000, -500, -100, 100, 500, 1000, 5000]
  );

  let subtraction = Number(firstNumber) - Number(secondNumber);
  let element2 = document.querySelector(".subtraction");
  element2.textContent = `Різниця чисел: ${subtraction}`;
  element2.style.color = getColor(
    subtraction,
    [-5000, -1000, -500, -100, 100, 500, 1000, 5000]
  );

  let multiplication = Number(firstNumber) * Number(secondNumber);
  let element3 = document.querySelector(".multiplication");
  element3.textContent = `Добуток чисел: ${multiplication}`;
  element3.style.color = getColor(
    multiplication,
    [-5000, -1000, -500, -100, 100, 500, 1000, 5000]
  );

  if (secondNumber == 0) {
    let element4 = document.querySelector(".division");
    element4.textContent = "Ділити на нуль не можна!";
    return;
  }

  let division = Number(firstNumber) / Number(secondNumber);
  let element4 = document.querySelector(".division");
  element4.textContent = `Частка чисел: ${division}`;
  element4.style.color = getColor(
    division,
    [-5000, -1000, -500, -100, 100, 500, 1000, 5000]
  );
}

numberOperations();

/*Змінена функція з уроку 24 по пошуку мінімального та максимального числа (алгоритм відповідно до попередньої функції) */

let minP = document.createElement("p");
minP.classList.add("minimal");
container.appendChild(minP);

let maxP = document.createElement("p");
maxP.classList.add("maximal");
container.appendChild(maxP);

const array = [23, 456, -45, 709, 1234, -78, 567, 93, 45, 12];

function minNumber(arr) {
  let min = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] < min) {
        min = array[i];
      }
    }
  }

  return min;
}

function maxNumber(arr) {
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] > max) {
        max = array[i];
      }
    }
  }

  return max;
}
let min = minNumber(array);
let max = maxNumber(array);

let element5 = document.querySelector(".minimal");
element5.textContent = `Мінімальне число: ${min}`;
element5.style.color = getColor(
  min,
  [-5000, -1000, -500, -100, 100, 500, 1000, 5000]
);

let element6 = document.querySelector(".maximal");
element6.textContent = `Максимальне число: ${max}`;
element6.style.color = getColor(
  max,
  [-5000, -1000, -500, -100, 100, 500, 1000, 5000]
);
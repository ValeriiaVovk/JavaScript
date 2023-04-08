//Homework 23

//1
function sumOfNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  return sum;
}

//2
function minNumber(array) {
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

//3
function maxNumber(array) {
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

//4
function drawTree() {
  let string = " ";
  let sharp = "#";
  for (let i = 0; i < 5; i++) {
    string = string + sharp;
    console.log(string);
  }
}

drawTree();




//Homework 24

//1
function addition(firstNumber, secondNumber) {
  //let firstNumber = prompt("Введіть перше число");
  //let secondNumber = prompt("Введіть друге число");

  if (firstNumber === "" || secondNumber === "") {
    return "Помилка в обчисленнях";
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Помилка в обчисленнях";
  }

  let addition = Number(firstNumber) + Number(secondNumber);
  return addition;
}

addition();

//2
function subtraction(firstNumber, secondNumber) {
  //let firstNumber = prompt("Введіть перше число");
  //let secondNumber = prompt("Введіть друге число");

  if (firstNumber === "" || secondNumber === "") {
    return "Помилка в обчисленнях";
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Помилка в обчисленнях";
  }

  let subtraction = Number(firstNumber) - Number(secondNumber);
  

  if (secondNumber > firstNumber) {
    let confirmed = confirm(`Ви впевнені, що хочете продовжити операцію?`);
    if (confirmed) {
      return subtraction;
    }
  } else if (firstNumber >= secondNumber) {
    return subtraction;
  }
}

subtraction();

//3
function multiplication(firstNumber, secondNumber) {
  //let firstNumber = prompt("Введіть перше число");
  //let secondNumber = prompt("Введіть друге число");

  if (firstNumber === "" || secondNumber === "") {
    return "Помилка в обчисленнях";
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Помилка в обчисленнях";
  }

  let multiplication = Number(firstNumber) * Number(secondNumber);
  return multiplication;
}

multiplication();

//4
function division(firstNumber, secondNumber) {
  //let firstNumber = prompt("Введіть перше число");
  //let secondNumber = prompt("Введіть друге число");

  if (firstNumber === "" || secondNumber === "") {
    return "Помилка в обчисленнях";
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Помилка в обчисленнях";
  }

  if (secondNumber == 0) {
    return "Ділити на нуль не можна!";
  }

  let division = Number(firstNumber) / Number(secondNumber);
  return division;
}

division();





// Homework 26

//1
function Accumulator(firstNumber) {
  this.number = firstNumber;
}
Accumulator.prototype.increment = function () {
  this.number++;
  console.log(this.number);
};

Accumulator.prototype.decrement = function () {
  this.number--;
  console.log(this.number);
};

let acc = new Accumulator(12);
acc.increment();
acc.increment();
acc.decrement();

//2
function CancelableAccumulator(firstNumber) {
  Accumulator.call(this, firstNumber);
  this.value = firstNumber;
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype.clear = function () {
  this.number = this.value;
  console.log(this.number);
};

let acc2 = new CancelableAccumulator(23);
acc2.increment();
acc2.decrement();
acc2.decrement();
acc2.clear();
acc2.decrement();
acc2.decrement();




//Homework 28

//1
let mainPhoto = document.createElement("img");
mainPhoto.classList.add("main-photo");
document.body.appendChild(mainPhoto);

mainPhoto = document.querySelector(".main-photo");

function animateImage() {
  mainPhoto.classList.toggle("animate");
}

mainPhoto.addEventListener("click", animateImage);

//2
let blockA = document.createElement("p");
blockA.classList.add("blockA");
document.body.appendChild(blockA);

blockA = document.querySelector(".blockA");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    blockA.scrollIntoView({ behavior: "smooth" });
  }
});

//3
let blockB = document.createElement("p");
blockB.classList.add("blockB");
document.body.appendChild(blockB);
blockB = document.querySelector(".blockB");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyB") {
    blockB.scrollIntoView({ behavior: "smooth" });
  }
});

//4
let blockC = document.createElement("p");
blockC.classList.add("blockC");
document.body.appendChild(blockC);
blockC = document.querySelector(".blockC");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyC") {
    blockC.scrollIntoView({ behavior: "smooth" });
  }
});

//5
let blockD = document.createElement("p");
blockD.classList.add("blockD");
document.body.appendChild(blockD);
blockD = document.querySelector(".blockD");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyD") {
    blockD.scrollIntoView({ behavior: "smooth" });
  }
});

//6
let blockE = document.createElement("p");
blockE.classList.add("blockE");
document.body.appendChild(blockE);
blockE = document.querySelector(".blockE");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyE") {
    blockE.scrollIntoView({ behavior: "smooth" });
  }
});

//7
let blockF = document.createElement("p");
blockF.classList.add("blockF");
document.body.appendChild(blockF);
blockF = document.querySelector(".blockF");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyF") {
    blockF.scrollIntoView({ behavior: "smooth" });
  }
});

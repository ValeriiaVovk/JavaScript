/*1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту*/
let vegetables = {};

function isEmpty(vegetables) {
  for (let key in vegetables) {
    return false;
  }
  return true;
}

console.log(isEmpty(vegetables));

/*2. Опишіть обʼєкт user з полями name, age та методом sayHello, 
результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”*/

let user = {
  name: "Lera",
  age: 24,
  sayHello: function () {
    console.log(`Привіт, я ${user.name}, мені ${user.age} років`);
  },
};

user.sayHello();

/*3. Напишіть обʼєкт калькулятор. */

let calculator = {
  ask: function () {
    let firstNumber = +prompt("Напишіть перше число");
    let secondNumber = +prompt("Напишіть друге число");

    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  },

  sum: function () {
    return this.firstNumber + this.secondNumber;
  },

  mul: function () {
    return this.firstNumber * this.secondNumber;
  },
};

calculator.ask();
console.log(`Сума чисел: ${calculator.sum()}`);
console.log(`Добуток чисел: ${calculator.mul()}`);

let firstNumber = prompt('Введіть перше число', 0);
let secondNumber = prompt('Введіть друге число', 0);

let addition = Number(firstNumber) + Number(secondNumber);
let subtraction = Number(firstNumber) - Number(secondNumber);
let multiplication = Number(firstNumber) * Number(secondNumber);
let division = Number(firstNumber) / Number(secondNumber);

alert(`Сума чисел: ${addition}`); 
alert(`Різниця чисел: ${subtraction}`); 
alert(`Добуток чисел: ${multiplication}`);
alert(`Частка чисел: ${division}`); 
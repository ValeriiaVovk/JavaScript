let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');

let addition = Number(firstNumber) + Number(secondNumber);
let subtraction = Number(firstNumber) - Number(secondNumber);
let multiplication = Number(firstNumber) * Number(secondNumber);
let division = Number(firstNumber) / Number(secondNumber);

if (firstNumber === "" || secondNumber === "") {
  alert(`Помилка в обчисленнях! Введіть числа!`);
} else {
  alert(`Сума чисел: ${addition}`);

  if (firstNumber < secondNumber) {
    let confirmed = confirm(`Ви впевнені, що хочете продовжити операцію?`);
    if (confirmed) {
      alert(`Різниця чисел: ${subtraction}`);
    } else {
    }
  } else if (firstNumber >= secondNumber) {
    alert(`Різниця чисел: ${subtraction}`);
  }

  alert(`Добуток чисел: ${multiplication}`);

  if (secondNumber == 0) {
    alert(`Ділити на нуль не можна!`);
  } else {
    alert(`Частка чисел: ${division}`);
  }
}
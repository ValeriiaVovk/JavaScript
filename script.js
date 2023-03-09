function numberOperations() {
  let firstNumber = prompt("Введіть перше число");
  let secondNumber = prompt("Введіть друге число");

  if (firstNumber === "" || secondNumber === "") {
    alert(`Помилка в обчисленнях`);
    return;
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert(`Помилка в обчисленнях`);
    return;
  }

  let addition = Number(firstNumber) + Number(secondNumber);
  alert(`Сума чисел: ${addition}`);

  let subtraction = Number(firstNumber) - Number(secondNumber);

  if (secondNumber > firstNumber) {
    let confirmed = confirm(`Ви впевнені, що хочете продовжити операцію?`);
    if (confirmed) {
      alert(`Різниця чисел: ${subtraction}`);
    } else {
    }
  } else if (firstNumber >= secondNumber) {
      alert(`Різниця чисел: ${subtraction}`);
  }

  let multiplication = Number(firstNumber) * Number(secondNumber);
  alert(`Добуток чисел: ${multiplication}`);

  if (secondNumber == 0) {
    alert(`Ділити на нуль не можна!`);
    return;
  }

  let division = Number(firstNumber) / Number(secondNumber);
  alert(`Частка чисел: ${division}`);

}

numberOperations();

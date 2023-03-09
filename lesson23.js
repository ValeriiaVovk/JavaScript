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

const array = [23, 456, -45, 709, 1234, -78, 567, 93, 45, 12];

console.log("Мінімальне число:", minNumber(array));
console.log("Максимальне число:", maxNumber(array));


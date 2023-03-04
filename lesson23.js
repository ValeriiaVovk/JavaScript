const array = [23, 456, -45, 709, 1234, -78, 567, 93, 45, 12];


let sum = 0;
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    sum = sum + array[i];
  }
}
console.log('Сума чисел:', sum);

let min = Infinity;
let max = -Infinity;

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
}

console.log("Мінімальне число:", min);
console.log("Максимальне число:", max);

let string = " ";
let sharp = "#";
for (let i = 0; i < 5; i++) {
  string = string + sharp;
  console.log(string);
}
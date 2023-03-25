function Accumulator(firstNumber) {
  this.number = firstNumber;
}
Accumulator.prototype.increment = function() {
  this.number++;
  console.log(this.number);
}

Accumulator.prototype.decrement = function() {
  this.number--;
  console.log(this.number);
}

let acc = new Accumulator(12);
acc.increment();
acc.increment();
acc.decrement();

function CancelableAccumulator(firstNumber) {
  Accumulator.call(this, firstNumber);
  this.value = firstNumber;
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype.clear = function () {
  this.number = this.value;
  console.log(this.number);
}

let acc2 = new CancelableAccumulator(23);
acc2.increment();
acc2.decrement();
acc2.decrement();
acc2.clear();
acc2.decrement();
acc2.decrement();
Array.prototype.pow = function (n) {
  return this.map((item) => {
    return Math.pow(item, n);
  });
};

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

const arr = [10, 2, 5, 12, 4, 8, 7];
const arrTwo = arr.pow(4);
function arrDefer() {
  console.log(arrTwo);
}
arrDefer.defer(5000);

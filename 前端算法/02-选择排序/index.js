Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i;

    for (let j = i; j < this.length; j++) {
      if (this[minIndex] > this[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = this[i];
      this[i] = this[minIndex];
      this[minIndex] = temp;
    }
  }

  return this;
};

let arr = [4, 2, 9, 6];
console.log(arr.selectionSort());

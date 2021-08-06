Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        //let temp = this[j];

        //this[j] = this[j + 1];

        //this[j + 1] = temp;
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }

  return this;
};

let arr = [4, 2, 9, 6];
console.log(arr.bubbleSort());

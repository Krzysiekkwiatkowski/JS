var Rectangle = function (length, width) {
      this.length = length;
      this.width = width;
};

Rectangle.prototype.getArea = function () {
      return this.length * this.width;
};

Rectangle.prototype.getPerimiter = function () {
    return 2 * (this.length + this.width);
};

var rectangle1 = new Rectangle(2,5);
var rectangle2 = new Rectangle(4,5);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimiter());
console.log(rectangle2.getArea());
console.log(rectangle2.getPerimiter());
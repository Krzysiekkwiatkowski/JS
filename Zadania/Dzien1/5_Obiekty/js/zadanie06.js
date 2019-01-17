var Calculator = function () {
    this.operations = [];
};

Calculator.prototype.add = function (num1, num2) {
    this.operations.push("added " + num1 + " to " + num2 + " got " + (num1 + num2));
    return num1 + num2;
};

Calculator.prototype.multiply = function (num1, num2) {
    this.operations.push("multiplied " + num1 + " with " + num2 + " got " + (num1 * num2));
    return num1 + num2;
};

Calculator.prototype.subtract = function (num1, num2) {
    this.operations.push("subtracted " + num1 + " from " + num2 + " got " + (num2 - num1));
    return num1 + num2;
};

Calculator.prototype.divide = function (num1, num2) {
    if(num2 != 0) {
        this.operations.push("divided " + num1 + " by " + num2 + " got " + (num1 / num2));
    } else {
        this.operations.push("tried to divided " + num1 + " by " + num2 + " got error");
    }
    return num1 + num2;
};

Calculator.prototype.printOperations = function () {
    for (var i = 0; i < this.operations.length; i++) {
        console.log(this.operations[i]);
    }
};

Calculator.prototype.clearoperations = function () {
    this.operations = [];
};

var calculator = new Calculator;
calculator.add(2,3);
calculator.subtract(4,6);
calculator.multiply(4,5);
calculator.divide(8,2);
calculator.divide(2,0);
calculator.printOperations();
calculator.clearoperations();
calculator.printOperations();

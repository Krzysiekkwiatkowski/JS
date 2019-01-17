var Car = function (brand, color) {
    this.brand = brand;
    this.color = color;
    this.km = 0;
};

Car.prototype.printCarinfo = function () {
    console.log(this.brand + " " + this.color + " " + this.km);
};

Car.prototype.drive = function (km){
    this.km += km;
};

Car.prototype.addCheck = function (check) {
    this.checks.push(check);
};

Car.prototype.showChecks = function () {
    for (var i = 0; i < this.checks.length; i++) {
        console.log(this.checks[i]);
    }
};

var bmw = new Car("bmw", "blue");
bmw.checks = ["2017", "2018", "2019"];
bmw.showChecks();
bmw.addCheck("2020");
bmw.showChecks();

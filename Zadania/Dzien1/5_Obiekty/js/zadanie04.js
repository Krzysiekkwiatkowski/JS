var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
};

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

var robot1 = new Robot("Robot1");
var robot2 = new Robot("Robot2");
var robot3 = new Robot("Robot3");
robot1.sayHi("Krzysiek");
robot2.changeName("Robot2changed");
robot2.sayHi("Kasia");
robot3.fixIt();
robot3.sayHi("Zenek");
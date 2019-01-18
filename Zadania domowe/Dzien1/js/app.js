function getNumber(number, array) {
    for (var i = 0; i < array.length; i++) {
        if(array[i] == number){
            return true;
        }
    }
    return false;
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

function createIdentityMatrix(rows) {
    var array2D = [];
    for (var i = 0; i < rows; i++) {
        var array = [];
        for (var j = 0; j < rows; j++) {
            if(j == i){
                array.push(1)
            } else {
                array.push(0);
            }
        }
        array2D.push(array);
    }
    return array2D;
}

var Tree = function (type) {
    this.type = type;
    // this.bloom = function () {
    //     return "I'm blooming";
    // }
};

Tree.prototype.bloom = function () {
        return "I'm blooming";
    };

var oak = new Tree("oak");
var maple = new Tree("maple");
var linden = new Tree("linden");
console.log(oak.bloom());

console.log(oak.hasOwnProperty("bloom"));
console.log(maple.hasOwnProperty("bloom"));
console.log(linden.hasOwnProperty("bloom"));

function addTheSameNumbers(number, array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i] == number){
            sum += number;
        }
    }
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i] == number){
            count++;
        }
    }
    if(count == 0){
        return null;
    }
    return sum;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));// => 14
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));// => 9
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));// => 0
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));// => null

function powers(number){
    var array = [];
    if(number <= 0){
        return array;
    }
    var i = 1;
    while (Math.pow(number, i) < 200){
        array.unshift(Math.pow(number, i));
        i++;
    }
    return array;
}

console.log(powers(2));
console.log(powers(5));
console.log(powers(-4));

function getFirstWrongElement(array) {
    for (var i = 0; i < array.length; i++) {
        var j = 0;
        while (array[i] * j <= array[i+1] * 2){
            if(array[i] * j == array[i+1]){
                break;
            } else if(array[i] * j < array[i+1]) {
                j++;
            } else if(array[i] * j > array[i+1]){
                return array[i+1];
            }
        }
    }
    return null;
}
console.log(getFirstWrongElement([1,5,10,14,28, 84]));
console.log(getFirstWrongElement([3,5,15,45]));
console.log(getFirstWrongElement([1, 8, 32, 128, 1024]));

function getLastNumbers(number, array) {
    var result = [];
    if(number == null || typeof number != "number"){
        return result;
    }
    for (var i = array.length - number; i < array.length; i++) {
        result.push(array[i]);
    }
    return result;
}

console.log(getLastNumbers(2,[1,2,3,4,5,6,7]));
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15]));
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4]));
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));
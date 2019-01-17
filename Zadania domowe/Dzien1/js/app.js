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
function add(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function multiply(array) {
    var multiplied = 1;
    for (var i = 0; i < array.length; i++) {
        multiplied *= array[i];
    }
    return multiplied;
}
console.log(add([-1,4,3,2]));
console.log(multiply([-1,4,3,2]));
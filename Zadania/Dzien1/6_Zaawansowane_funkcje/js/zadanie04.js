function sorting() {
    var array = [];
    for (var i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }

    array.sort(function (a, b) {
        return a - b;
    });
    return array[array.length - 1];
}

console.log(sorting(5, 29, 6, 4, 34, 56, 2, 3));
function create2DArray(rows, columns) {
    var number = 1;
    var array = [];
    for (var i = 0; i < rows; i++) {
        var arr = [];
        for (var j = 0; j < columns; j++) {
            arr[j] = number;
            number++;
        }
        array[i] = arr;
    }
    return array;
}

function print2DArray(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

var arr = create2DArray(2,3);
print2DArray(arr);
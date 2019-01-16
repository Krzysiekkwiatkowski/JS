function print2DArray(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}
var arr = [];
arr[0] = [1,2,3];
arr[1] = [4,5,6];
arr[2] = [7,8,9];
print2DArray(arr);
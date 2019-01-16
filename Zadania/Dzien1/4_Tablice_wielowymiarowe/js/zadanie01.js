function checkArray(array){
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var isEven = true;
        for (var j = 0; j < array[i].length; j++) {
            if(array[i][j] % 2 != 0){
                isEven = false;
            }
        }
        result[i] = isEven;
    }
    return result;
}
var arr = []
arr[0] = [3, 4, 56, 773, 1];
arr[1] = [7, 12, 0, 98, 34, 381];
arr[2] = [12, 66, 96, 54, 10];
console.log(checkArray(arr));
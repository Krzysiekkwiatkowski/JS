function distFromAverage(array) {
    var resultArray = [];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var avg = sum / array.length;
    for (var i = 0; i < array.length; i++) {
        resultArray.push(Math.abs(array[i] - avg));
    }
    return resultArray;
}
console.log(distFromAverage([1,2,3,4,5,6,7]));
console.log(distFromAverage([1,1,1,1]));
console.log(distFromAverage([2,8,3,7]));
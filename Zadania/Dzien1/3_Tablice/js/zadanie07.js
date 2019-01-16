function getMissingElement(array) {
    for (var i = 0; i < array.length - 1; i++) {
        if(array[i+1] - array[i] > 1){
            return (array[i] + array[i+1]) / 2;
        }
    }
    return null;
}
console.log(getMissingElement([1,2,3,4,5,6,7]));// => null
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));// => 9
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));// => -1
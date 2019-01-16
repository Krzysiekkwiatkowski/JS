function factors(number) {
    var result = [];
    if(number <= 0){
        return result;
    }
    for (var i = number; i > 0; i--) {
        if(number % i == 0){
            result.push(i);
        }
    }
    return result;
}
console.log(factors(17));
function check(array) {
    var min = 0;
    var max = 2020;
    var first = true;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > min && array[i] < max) {
            max = array.shift();
            min = max;
        } else if (array[i] > min) {
            min = array.shift();
        } else if (array[i] < max) {
            max = array.shift();
        }
        array.shift();
        i = 0;
    }
    console.log("Najmłodszy " + (2019 - min) + " lata");
    console.log("Najstarszy " + (2019 - max) + " lata");
}

check([1977, 1999, 1978, 1990, 2014, 2005]);
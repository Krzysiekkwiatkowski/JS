function fruitsFunction(array) {
    console.log(array[0]);
    console.log(array[array.length - 1]);
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
var fruits = ["apple", "peach", "watermelon", "pineapple"];
fruitsFunction(fruits);
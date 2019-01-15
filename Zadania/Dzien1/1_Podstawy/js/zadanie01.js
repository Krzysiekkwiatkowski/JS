function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    //poniżej napisz rozwiązanie zadania
    if(randomNumber % 2 == 0) {
        console.log("Liczba parzysta")
    } else {
        console.log("Liczba nieparzysta")
    }
    var text = "";
    for (var i = randomNumber; i >0; i--){
        if(randomNumber % i == 0){
            if(i > 1){
                text += i + ", ";
            } else {
                text += i;
            }
        }
    }
    console.log(text);
    console.log("Wylosowana liczba: " + randomNumber);
    console.log(randomNumber + " % " + 5 + " = " + randomNumber % 5);
    console.log(randomNumber + "^" + randomNumber % 5 + " = " + Math.pow(randomNumber, randomNumber % 5));
}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();

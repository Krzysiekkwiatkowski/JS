function calculateTip(amount, rating) {
    if(rating == "Bad service"){
        return amount * 0;
    } else if(rating == "Neutral service"){
        return amount * 0.15;
    } else if(rating == "Good service"){
        return amount * 0.20;
    } else if(rating == "Very good service"){
        return amount * 0.25;
    } else {
        return "Opis nieczytelny";
    }
}
console.log(calculateTip(50, "Very gooce"));
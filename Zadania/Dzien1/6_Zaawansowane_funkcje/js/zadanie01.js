function boilEgg(time) {
    var boiling = setInterval(function () {
        console.log("Jajko się gotuje");
    }, 5000);
    setTimeout(function () {
        clearInterval(boiling);
        console.log("Jajko ugotowane");
    }, time * 1000);
}

boilEgg(30);
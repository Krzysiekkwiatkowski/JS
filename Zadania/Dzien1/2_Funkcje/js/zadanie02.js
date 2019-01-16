function areacircuit(r) {
    if(typeof r != "number"){
        return false;
    } else {
        var area = 3.14 * Math.pow(r, 2);
        var circuit = 6.28 * r;
        return "Area: " + area + ", Circuit: " + circuit;
    }
}
console.log(areacircuit(4))
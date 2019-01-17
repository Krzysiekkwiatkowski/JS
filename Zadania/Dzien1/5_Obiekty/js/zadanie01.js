String.prototype.upperLower = function () {
    var text = this.toString();
    var newText = "";
    var j = 0;
    for (var i = 0; i < text.length; i++) {
        if(text.charAt(i) == " "){
            newText += " ";
            j++;
        } else {
            if ((i + j) % 2 != 0) {
                newText += text.charAt(i).toUpperCase();
            } else if ((i + j) % 2 == 0) {
                newText += text.charAt(i).toLowerCase();
            }
        }
    }
    return newText;
};

var text = "Javascript jest super".upperLower();
console.log(text);
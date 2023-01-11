function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(num){
    var a = "";
    var i = 1;
    for(i=1 ; i<=num; i++){
        a = a + makeLine(i);
    }
    return a;
}
    
console.log(buildTriangle(5));

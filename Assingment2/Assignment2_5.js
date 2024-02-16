// Write a typescript program which contains one function named as ChkString. That function
// accepts one string and check whether string contains "Marvellous" word or not.
// Input :  "Pune Kothrud Marvellous Infosystem"
// Output :  String contains Marvellous in it. 
function ChkString(inputString) {
    var i = 0;
    var j = 0;
    for (i = 0; i <= inputString.length - "Marvellous".length; i++) {
        var found = true;
        for (j = 0; j < "Marvellous".length; j++) {
            if (inputString[i + j] !== "Marvellous"[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return "String contains Marvellous in it.";
        }
    }
    return "String does not contain Marvellous.";
}
var inputString = "Pune Kothrud Marvellous Infosystem";
var result = ChkString(inputString);
console.log(result);

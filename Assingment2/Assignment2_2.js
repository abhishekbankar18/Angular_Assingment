// Write a typescript program which contains one function accepts named as Summation. That fumction
// accepts array of numbers and returns the largest number from array.
// Input :  23  6   7   4   5   7
// Output :  Addition is 52
function Summation(Arr) {
    var Sum = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        Sum = Sum + Arr[i];
    }
    return Sum;
}
var No2 = [23, 6, 7, 4, 5, 7];
var Result = 0;
Result = Summation(No2);
console.log("Addition is " + Result);

// Write a typescript program which contains one function accepts named as Maximum. That fumction
// accepts array of numbers and returns the second largest number from array.
// Input :  23  89  6   29  56  45  77  32
// Output :  Maximum number is 77
function Maximum(Arr) {
    var Max = 0;
    var SecondMax = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i] > Max) {
            SecondMax = Max;
            Max = Arr[i];
        }
        else if ((Arr[i] > SecondMax) && (Arr[i] < Max)) {
            SecondMax = Arr[i];
        }
    }
    return SecondMax;
}
var No1 = [23, 89, 6, 29, 56, 45, 77, 32];
var Result = 0;
Result = Maximum(No1);
console.log("Second Maximum number is " + Result);

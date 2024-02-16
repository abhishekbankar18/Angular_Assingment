// Write a typescript program which contains one function named as Fibonacci. That function accepts
// one number and print Fibonacci series till that number.
// Input    :   21
// Output   :   1   1   2   3   5   8   13  21
function Fibonacci(iValue) {
    var No1 = 1;
    var No2 = 1;
    var iCnt = 0;
    var Ans = 0;
    console.log(No1);
    console.log(No2);
    while (Ans != iValue) {
        Ans = No1 + No2;
        No1 = No2;
        No2 = Ans;
        console.log(Ans);
    }
}
var No = 21;
Fibonacci(No);

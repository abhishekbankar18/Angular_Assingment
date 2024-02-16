// Write a typescript program which contains one function named as Fibonacci. That function accepts
// one number and print Fibonacci series till that number.

// Input    :   21
// Output   :   1   1   2   3   5   8   13  21


function Fibonacci(iValue : number) : void
{
    var No1 : number = 1;
    var No2 : number = 1;
    var Ans : number = 0; 

    console.log(No1);
    console.log(No2);
    
    while(Ans != iValue)
    {
        Ans = No1 + No2;
        No1 = No2;
        No2 = Ans;

        console.log(Ans);
    }
}

var No : number = 21;
Fibonacci(No);
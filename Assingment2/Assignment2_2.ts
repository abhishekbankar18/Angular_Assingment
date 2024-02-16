// Write a typescript program which contains one function accepts named as Summation. That fumction
// accepts array of numbers and returns the largest number from array.

// Input :  23  6   7   4   5   7
// Output :  Addition is 52


function Summation(Arr : number[]) : number
{
    var Sum : number = 0;
    var i : number = 0;
    for(i = 0; i < Arr.length ;i++)
    {
        Sum = Sum + Arr[i];
    }

    return Sum;
}

var No2 : number[] = [23, 6, 7, 4, 5, 7];

var Result : number = 0;

Result = Summation(No2);
console.log("Addition is "+Result);

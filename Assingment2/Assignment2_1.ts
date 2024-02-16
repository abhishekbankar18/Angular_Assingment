// Write a typescript program which contains one function accepts named as Maximum. That fumction
// accepts array of numbers and returns the largest number from array.

// Input :  23  89  6   29  56  45  77  32
// Output :  Maximum number is 89


function Maximum(Arr : number[]) : number
{
    var Max : number = 0;
    var i : number = 0;
    for(i = 0; i < Arr.length ;i++)
    {
        if(Arr[i] > Max)
        {
            Max = Arr[i];
        }
    }

    return Max;
}

var No1 : number[] = [23, 89, 6, 29, 56, 45, 77, 32];

var Result : number = 0;

Result = Maximum(No1);
console.log("Maximum number is "+Result);

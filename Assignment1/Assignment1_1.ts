// Write a typescript program which contains one function named as Maximum. The function accepts
// three parameters and its should returns largest value from three input parameters.

// Input    :   23  89  6
// Output   :   Maximum number is 89

function Maximum(Value1 : number, Value2 : number, Value3 : number) : number
{

    if((Value1 > Value2) && (Value1>Value3))
    {
        return Value1;
    }
    else if((Value2 > Value3) && (Value2 > Value1))
    {
        return Value2;
    }
    else
    {
        return Value3;
    }
}

var No1 : number = 23;
var No2 : number = 89;
var No3 : number = 6;
var ans : number = 0;

ans = Maximum(No1,No2,No3);

console.log("Maximum number is "+ans);
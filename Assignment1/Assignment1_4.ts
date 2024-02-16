// Write a typescript program which contains one function named as ChkPrime. That function accepts
// one number and it should return true if the given number is prime and otherwise return false.

// Input    :   11
// Output   :   It is prime number


function ChkPrime(iValue : number) : boolean
{
    var Ans : boolean = false;
    var iCnt : number = 1;
    var iNo : number = 0;

    for(iCnt = 2; iCnt <= (iValue/2); iCnt++)
    {
        if((iValue % iCnt) == 0)
        {
            iNo++;
        }
    }

    if(iNo > 0)
    {
        Ans = false;
    }
    else
    {
        Ans = true;
    }

    return Ans;
}

var No : number = 11;
var Valid : boolean = false;

Valid = ChkPrime(No);

if(Valid == true)
{
    console.log("It is prime number");
}
else
{
    console.log("It is not prime number");
}
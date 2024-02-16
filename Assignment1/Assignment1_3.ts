// Write a typescript program which contains one function named as DisplayFactors. The function accepts
// one number and display factors of that number.

// Input    :   20
// Output   :   1   2   4   5   10

function DisplayFactors(iValue : number) : void
{
    var iCnt : number = 0;
    for(iCnt = 1 ; iCnt <= (iValue/2) ; iCnt++)
    {
        if((iValue % iCnt) == 0)
        {
            console.log(iCnt+"\t");
        }
    }
}

var No : number = 20;
DisplayFactors(No);
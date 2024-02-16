// Write a typescript program which contains one arrow function accepts named as ChkArmstrong. That function
// accepts one number and check whether number is Armstrong number or not.
// Input :  153
// Output :  It is Armstrong number
function ChkArmstrong(No1) {
    var temp = No1;
    var Power = 0;
    while (temp != 0) {
        temp = Math.floor(temp / 10);
        Power++;
    }
    console.log("Power is :" + Power);
    temp = No1;
    var iDigit = 0;
    var iCnt = 0;
    var mult = 0;
    var isum = 0;
    while (temp != 0) {
        iDigit = temp % 10;
        temp = Math.floor(temp / 10);
        mult = iDigit;
        for (iCnt = 1; iCnt < Power; iCnt++) {
            mult = mult * iDigit;
        }
        isum = isum + mult;
    }
    if (isum == No1) {
        console.log("It is armstrong number..");
    }
    else {
        console.log("It is not armstrong number..");
    }
}
var Value = 153;
ChkArmstrong(Value);

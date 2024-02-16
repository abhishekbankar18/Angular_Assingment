// Write a typescript program which contains one function named as Area. The function should 
// calculate area of circle. Accept value of redius from user and return its Area. Default value
// of PI should be 3.14 If it is not provided by the caller.

// Input    :   5
// Output   :   Area of circle is 78.5

function Area(iValue : number) : number
{
    var PI : number = 3.14;
    var Area : number = 0;

    Area = PI * iValue * iValue;

    return Area;
}

var radius : number = 5;
var ans : number = 0;

ans = Area(radius);
console.log("Area of circle is "+ans);
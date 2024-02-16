/*
 Create a typescript application which contains one class named as Arithmetic.
 Arithmetic class contains three characteristics(Class data memebers) as Number1,Number2.
 Create one parametrised constructor which accept two values and assign it to Number1 and Number2.
 In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction,
 Multiplication and Division.
 Addition method will add Number1, Number2, and return result.
 Subtraction method will subtract Number1, Number2, and return result.
 Multiplication method will multiply Number1, Number2, and return result.
 Division method will divide Number1, Number2, and return result.
 After designing the class create two objects of that class by providing some hardcoded value.
 call all the methods by using both the objects..

*/

class Arithmetic
{
    public Number1 : number;
    public Number2 : number;

    constructor(No1 : number,No2 : number)
    {
        this.Number1 = No1;
        this.Number2 = No2;
    }

    Addition()
    {
        var Aans : number = 0;
        Aans = this.Number1 + this.Number2;
        return Aans;
    }

    Subtraction()
    {
        var Aans : number = 0;
        Aans = this.Number1 - this.Number2;
        return Aans;
    }

    Multiplication()
    {
        var Aans : number = 0;
        Aans = this.Number1 * this.Number2;
        return Aans;
    }

    Division()
    {
        var Aans : number = 0;
        Aans = this.Number1 / this.Number2;
        return Aans;
    }
}

var obj1 = new Arithmetic(50,10);
var obj2 = new Arithmetic(20,10);

var Result : number = 0;
Result = obj1.Addition();
console.log("Addition of obj1 is :"+Result);

Result = obj1.Subtraction();
console.log("Subtraction of obj1 is :"+Result);

Result = obj1.Multiplication();
console.log("Multiplication of obj1 is :"+Result);

Result = obj1.Division();
console.log("Division of obj1 is :"+Result);

Result = obj2.Addition();
console.log("Addition of obj2 is :"+Result);

Result = obj2.Subtraction();
console.log("Subtraction of obj2 is :"+Result);

Result = obj2.Multiplication();
console.log("Multiplication of obj2 is :"+Result);

Result = obj2.Division();
console.log("Division of obj2 is :"+Result);

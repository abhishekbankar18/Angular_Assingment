/* 
 Create one typesript application which contains one class named as Circle.
 Circle class contains two characteristics (class data memebers ) as Radius, PI.
 create one parametrrised constructor which accept one value and assign it to Radius.
 Value of PI member is set to 3.14.
 In circle class we have to one method as Area which will return area of Circle.
 After designning the class create two objects of that class by providing some hardcoded value.
 Call the method Area by using both the objects.

*/

class Circle
{
    public Radius : number;
    public PI : number;

    constructor(A : number)
    {
        this.Radius = A;
        this.PI = 3.14
    }

    Area()
    {
        var ans : number = 0;
        ans = this.PI * this.Radius * this.Radius;
        return ans;
    }
}

var obj1 = new Circle(10);
var obj2 = new Circle(11);

var Result : number = 0;
Result = obj1.Area();
console.log("Area of circle for obj1 is :"+Result);

Result = obj2.Area()
console.log("Area of circle for obj2 is  :"+Result);

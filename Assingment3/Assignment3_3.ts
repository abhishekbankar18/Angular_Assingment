/*
create one typescript application which contains one class method named as CircleX which inherits above Circle class.
In ciclex class we have tp write one method as Circumference which will return circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call circumference and area methods by using both the objects.
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

class CircleX extends Circle
{
    Circumference()
    {
        var ans : number = 0;
        ans = 2 * this.PI * this.Radius;
        return ans;
    }
}

var obj1 = new CircleX(10);
var obj2 = new CircleX(11);

var result : number = 0;
result = obj1.Circumference();
console.log("Cicumference of cicle is : "+result);

result = obj2.Circumference();
console.log("Cicumference of cicle is : "+result);

result = obj1.Area();
console.log("Area of cicle is : "+result);

result = obj2.Area();
console.log("Area of cicle is : "+result);
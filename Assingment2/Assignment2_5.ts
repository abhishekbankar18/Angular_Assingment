// Write a typescript program which contains one function named as ChkString. That function
// accepts one string and check whether string contains "Marvellous" word or not.

// Input :  "Pune Kothrud Marvellous Infosystem"
// Output :  String contains Marvellous in it. 

function ChkString(inputString: string): string 
{
    var i : number = 0;
    var j : number = 0;

    for( i = 0; i <= inputString.length - "Marvellous".length; i++) 
    {
        var found : boolean = true;
        for(j = 0; j < "Marvellous".length; j++) 
        {
            if(inputString[i + j] !== "Marvellous"[j]) 
            {
                found = false;
                break;
            }
        }
        if (found) 
        {
            console.log("String contains Marvellous in it.");
            break;
        }
    }

    return "String does not contain Marvellous.";
}


const inputString: string = "Pune Kothrud Marvellous Infosystem";
const result: string = ChkString(inputString);

console.log(result);


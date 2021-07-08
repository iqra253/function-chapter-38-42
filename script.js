//1. Write a custom function power ( a, b ), to calculate the value of
//a raised to b.//

function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

//2. Any year is entered through the keyboard. Write a function to
//determine whether the year is a leap year or not.//


function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


//3. If the lengths of the sides of a triangle are denoted by a, b, and
//c, then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2//


/*4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction.*/

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}
/*5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now.*/

/*"How are you?".indexOf("o");
"How are you?".lastIndexOf("o");
"How are you?".indexOf("are");
"How are you?".slice(8, 11);
"How are you?".slice(8);*/


/*6. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long.*/





var string = "heelloo world";
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
            }

        }
    }
}

string.character();
console.log(string);


/*7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence*/

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;

    switch (str) {
        case 'a':
            count++;
        case 'A':
            count++
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return 1;
        default:
            return 0;
    }
}

findOccurrences();



/*8. The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters.*/





int main()

{

int a,b,c,d,f;

printf ("Enter the distance (in km): ");

scanf ("%d",&a);

b = a * 1000;

c = b * 3.28;

d = c * 12;

f = d * 30;

printf ("\nDistance in meters = %d m",b);

printf ("\nDistance in feets = %d feet",c);

printf ("\nDistance in inches = %d inches",d);

printf ("\nDistance in centimeters= %d cm",f);

printf ("\n\npress any key to close.");

getch ();

return 0;

}


/*9. Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour.*/

function main()

{

clrscr();

int i, time_worked, over_time, overtime_pay=0;

for(i=1;i<=10;i++)

{

printf("\nenter the time employee worked in hr ");

scanf("%d",&time_worked);

if(time_worked>40)

{

over_time=time_worked-40;

overtime_pay=overtime_pay+(12*over_time);

}

}

printf("\nTotal Overtime Pay Of 10 Employees Is %d",overtime_pay);

return();


/*10. A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer.*/

// Java program to accept an amount
// and count number of notes
import java.util.*;
import java.lang.*;

public class GfG{

	// function to count and
	// print currency notes
	public static void countCurrency(int amount)
	{
		int[] notes = new int[]{ 2000, 500, 200, 100, 50, 20, 10, 5, 1 };
		int[] noteCounter = new int[9];
	
		// count notes using Greedy approach
		for (int i = 0; i < 9; i++) {
			if (amount >= notes[i]) {
				noteCounter[i] = amount / notes[i];
				amount = amount - noteCounter[i] * notes[i];
			}
		}
	
		// Print notes
		System.out.println("Currency Count ->");
		for (int i = 0; i < 9; i++) {
			if (noteCounter[i] != 0) {
				System.out.println(notes[i] + " : "
					+ noteCounter[i]);
			}
		}
	}
	
	// driver function
	public static void main(String argc[]){
		int amount = 868;
		countCurrency(amount);
	}
	
	/* This code is contributed by Sagar Shukla */
}




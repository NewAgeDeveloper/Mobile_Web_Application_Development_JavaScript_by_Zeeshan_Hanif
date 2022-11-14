/*
// Question 1
alert("Welcome to JS Land... \n Happy Coding!");

// Question 2
var name="Jhone Doe";
var age=15;
var course="Certified Mobile Application Development";

alert(name); alert(age+"years old"); alert(course);

// Question 3
var email="example@example.com";

alert("My Email Address is"+email);

// Question 4
// document.write("Yah! I can write HTML content through Javascript");

// Question 5
alert("I am"+age+"years old");

// Question 6
var birthYear=1990;

document.write("My birth year is"+birthYear+"<br>"+"Data type of my decleared veriable is"+typeof birthYear);
*/
//Question 7
/*
document.write("<b>Rules for naming veriables</b> <br><br>");
document.write("a. Variable names can only contain number, alphabets, underscore, and doller sign. <br>"+
                "b. For example $my_1stVeriable. <br>"+
                "c. Variables must begin with a dollar sign, alphabet or underscore. <br>"+
                "d. For example $name, _name or name. <br>"+
                "e. Variable names are case sensitive.<br>"+
                "f. Variable names should not be JS keyword. <br>");
*/

// Question 8
/*
var number1=3;
var number2=5;
var sum=number1+number2;

document.write("Sum of "+number1+" and "+number2+" is "+sum);
*/
/*
// Question 10
 var a;
 document.write("Value after variable declaration is:"+typeof a+"<br>");
 a=5;
 document.write("Initial value: "+a+"<br>");
 a++;
 document.write("Value after increment is: "+a+"<br>");
 a = a + 7;
 document.write("Value after addition is: "+a+"<br>");
 a--;
 document.write("Value after decrement is: "+a+"<br>");
 a = a%3;
 document.write("The remainder is: "+a);
*/

// Question 11
/*
var tempInCentigrade=25;
var tempInFahrenhite=70;
var centigrageToFahrenhite= (tempInCentigrade*9/5)+32;
var fahrenhiteToCentigrade= (tempInFahrenhite - 32)*5/9;

document.write(tempInCentigrade+"<sup>o</sup>C is "+centigrageToFahrenhite+"<sup>o</sup>F <br>");
document.write(tempInFahrenhite+"<sup>o</sup>F is "+fahrenhiteToCentigrade+"<sup>o</sup>C");
*/

// Question 12
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("Value of a is "+a+"<br> Value of b is "+b+"<br> Result is "+result+"<br><br>");
--a;
document.write("Value of a is "+a+"<br><br>");
--a - --b;
document.write("Value of a is "+a+"<br> Value of b is "+b+"<br><br>");
--a - --b + ++b;
document.write("Value of a is "+a+"<br> Value of b is "+b+"<br><br>");
--a - --b + ++b + b--;
document.write("Value of a is "+a+"<br> Value of b is "+b);

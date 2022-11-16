/* Task 1
var array=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<b>Qualification</b><br>")
for(var i=0; i<array.length; i++){
    document.write("<br>"+array[i]);
}
*/

/* Task 5
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(arr1);
var uniq = [ ...new Set(arr1) ];
console.log(uniq);
*/


/* Task 6
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
for(var i=0; i<((aCities.length)-1); i++){
    document.write((i+1)+" choice is "+aCities[i]+"<br>");
}
*/


/* Task 7
var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c = a.concat(b);
console.log(c);
var d = [ ...new Set(c)];
console.log(d.sort());
*/

/* Task 9
var a = [24, 1, 10, 53, 78, 91, 12];
var b = a.sort();
console.log("Array items are "+b);
console.log("Largest number is "+b.pop());
*/


/* Task 11*/
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC Backery. What you want to order?");
var itemAvailable = false;
for(var i=0; i<arr.length; i++){
    if(arr[i]==item){
        console.log("Order is placed");
        itemAvailable = true;
        break;
    }
}
if(!itemAvailable){
    console.log("Not available");
}
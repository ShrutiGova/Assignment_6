//Assignment 6

//1. For statement
// Find sum of frist 10 natural numbers 

let i = 1;
let sum = 0;
for (i; i < 10; i++) {
    sum += i;
}

console.log(sum);

//print fibonacci series of first 10 numbers.

let f0 = 0;
let f1 = 1;
console.log("First 10 fibbonaci numbers:");
console.log(0);
console.log(1);
for (let j = 2; j < 10; j++) {
    let f2 = f0 + f1;
    console.log(f2);
    f0 = f1;
    f1 = f2;
}

//2. do while statement
// Find sum of frist 10 natural numbers 
 let x = 1;
 let total = 0;
 do{
     total += x;
     x++;
 }while(x<11)
 console.log(total);
 
 //print fibonacci series of first 10 numbers.
 f0 = 0;
 f1 = 1;
 console.log(0);
 console.log(1);
 console.log("First 10 Fibonacci  numbers");
 i = 2;
 do{
     f2 = f0+f1
    console.log(f2);
    f0 = f1;
    f1 = f2;
    i++;
}while(i<10);
 
//3. While statement
// Find sum of frist 10 natural numbers 

i = 1;
sum = 0;
while(i<11){
    sum +=i;
    i++;
}
console.log(sum);

 //print fibonacci series of first 10 numbers.
 f0 = 0;
 f1 = 1;
 console.log(0);
 console.log(1);
 i = 2;
 while(i<10){
     let f2 = f0 + f1;
     console.log(f2);
     f0 = f1;
     f1 = f2;
     i++;
 }

//4. for...in statement
//creating an object
const student = {
    fName: 'Mini',
    class: 8,
    age: 12,
    id: 1234
};

 for (const key in student) {
     //diasplay the properties of student object
     console.log(`${key}`=`${student[key]}`);
 }
  //Output:
  //fName = Mini
  //class = 8
  //age = 12
  //id = 1234

//5. for...of statement
//creating an array
const array1 = ['a', 'b','c'];

for(const element of array1){
    console.log(element);
}
//Output: a,b,c
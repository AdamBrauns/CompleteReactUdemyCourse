/*
Destructuring easily extracts array elements or object properties
and store them in variables

Array Destructuring:
[a, b] = ['Hello', 'Max']
console.log(a) // Hello
consloe.log(b) // Max

Object Destructuring:
{name} = {name: 'Max', age: 27}
console.log(name) // Max
console.log(age) // Undefined
*/

const numbers = [1, 2, 3];
//[num1, num2] = numbers;
//console.log(num1, num2)

// To get 3, leave a , 
[num1, ,num3] = numbers;
console.log(num1, num3)
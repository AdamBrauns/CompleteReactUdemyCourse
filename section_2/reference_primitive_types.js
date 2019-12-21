// Objects and arrays are reference types

// Primitive number
const number = 1;
// Creates a copy
const num2 = number;

console.log(num2)

const person = {
    name: 'Max'
}

// Creates a pointer(same for arrays)
const secondPerson = person;

// To not create a pointer, use the spread opperator
const thirdPerson = {
    ...person
}

person.name = 'Manu'

console.log(secondPerson);

console.log(thirdPerson)
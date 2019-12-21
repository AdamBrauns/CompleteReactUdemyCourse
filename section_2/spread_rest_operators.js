/*
Spread:
- Used to split up array elements or object properties
const newArray = [...oldArray, 1,2]
const newObject = {...oldObject, newProp: 5}

Rest:
- Used to merge a list of function arguments into an array
function sortArgs(...args) {
    return args.sort()
}
*/

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]
const newNumbersNoDots = [numbers, 4]

console.log(newNumbers)
console.log(newNumbersNoDots)

const person = {
  name: 'Max'
}

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson)

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));
/*
function myFnc(){
    ...
}

const myFnc = () => {
    ...
}

No more issues with the this keyword
*/

// Old way
function printMyName(name) {
    console.log(name)
}
printMyName('Adam')


const printMyName1 = (name) => {
    console.log(name)
}
printMyName('Adam')


// If you have one argument, you can ommit the ()
const printMyName2 = name => {
    console.log(name)
}
printMyName2('Adam')
  
const multiplyByTwo = (number) => {
    return number * 2;
}
console.log(multiplyByTwo(5))
  
// If all you are doing is returning something on one line,
// You can do this:
// (Need to omit the return keyword)
const multiplyByThree = (number) => number * 3
console.log(multiplyByThree(5))
/*
Properties:
ES6
constructor() {
    this.myProperty = 'value'
}
ES7
myProperty = 'value'

Methods:
ES6
myMethod() {...}
ES7
myMethod = () => {...}
*/

class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}
  
class Person extends Human {
    name = 'Adam';

    printMyName = () => {
        console.log(this.name);
    }
}
  
const person = new Person();
person.printMyName();
person.printGender();
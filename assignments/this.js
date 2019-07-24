/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implict means look to the left of the dot when the function is CALLED not when it is created to see what 'this' is referring to.
* 2. Explicit means you're telling the invokation where to look by passing the variable of the object in as an arguement.
* 3. New Binding means it creates a new function that is not used/invoked immediatly rather it is saved for use in the future.
* 4. Window Binding is not something we want but if none of the others apply it will bind to the window/global window.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let number = {
    faveNum: 14,
    speak: function(){
        console.log(`My favorite number is ${this.faveNum}`);
        }
}
//console.log(this);
//speak(); //doesn't know where to look, not sure if this is binded to the window

// Principle 2

// code example for Implicit Binding

let Person = {
    name: "Lindsey",
    age: "Forever 21",
    location: "NOLA",
    greeting: function(){
        console.log(`Hi! My name is ${this.name}, I am ${this.age} and I am from ${this.location}!`);
    }
}
Person.greeting(); //this will look inside person to see what to use for 'this' in my console.log.

// Principle 3

// code example for New Binding

function newPerson(){
    console.log(`My favorite person's name is ${this.name}`);
}

let myNewPerson = {
    name: 'Sebastian',
    age: 5,
    gender: 'M',
}

favoritePerson = newPerson.bind(myNewPerson); //favoritePerson is the new function
favoritePerson(); //It's called down here, later or any time later. Not invoked initially.




// Principle 4

// code example for Explicit Binding

let myPet = {
    name: 'Sandy',
    age: 5,
    type: 'dog',
    markings: 'freckles on her nose',
}
function info(){
        console.log(`My ${this.type} ${this.name} is ${this.age} years old and has ${this.markings}!`)
    }
info.call(myPet); //*notes* call is a property on every function and the first argument you pass to it will be the context (or the focal object) in which the function is invoked. In other words, the first argument you pass to call will be what the this keyword inside that function is referencing.
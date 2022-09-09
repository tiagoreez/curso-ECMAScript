
// Se integran las palabras claves const y let que sirven para declarar palabras

let fruit = 'Apple'
fruit = 'kiwi'
console.log(fruit)

//Este se ve que es reasignable

const animal = 'dog'
animal = 'cat'
console.log(animal)

//Const es para crear variables constantes que no se pueden reasignar 

const fruits = () =>{

    if(true){
        var fruit1 = 'apple' //function scope
        let fruit2 = 'kiwi' // block scope
        const fruit3 = 'banana' //block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()

class User {}


const newUser = new User();

class user{

    //metodos

    greeting(){

        return 'hello'

    }

}

//const reez = new user()
console.log(reez.greeting())

const anotherUser = new user()
console.log(anotherUser.greeting())


//constructor

class user{

    //metodos

    constructor(){

        console.log('usuario creado')

    }

    greeting(){

        return 'hello'

    }

}

const david = new user()

//this


class user{

    //metodos

    constructor(name){
        this.name=name
        

    }

    speak(){

        return 'hello'

    }

    greeting(){

        return `${this.speak()} ${this.name}`

    }

}


console.log(reez.greeting())


//setter getters

class user{

    //metodos

    constructor(name,age){
        this.name=name
        this.age=age
        

    }

    speak(){

        return 'Hello'

    }

    greeting(){

        return `${this.speak()} ${this.name}`

    }
    get uAge(){

        return this.age

    }
    set uAge(n){

        this.age = n 

    }
}


const reez = new user('reez',19)
console.log(reez.uAge)
console.log(reez.uAge = 21)
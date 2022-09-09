class user{

    //metodos

    constructor(name,age){
        this.name=name
        this.age=age
        

    }

    #speak(){

        return 'Hello'

    }

    greeting(){

        return `${this.speak()} ${this.name}`

    }
    get #uAge(){

        return this.age

    }
    set #uAge(n){

        this.age = n 

    }
}



const reez = new user('reez',19)
console.log(reez.uAge)
console.log(reez.uAge = 21)
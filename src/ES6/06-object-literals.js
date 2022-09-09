// enhaced object literals

function newUser(user, age, country){

    return{

        user,
        age,
        country,

        /*antes
        
        user:user,
        age:age,
        country:country,
        
        */

    }

}

console.log(newUser('san',19,'col'))
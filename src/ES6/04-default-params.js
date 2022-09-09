
//Forma antigua para poner parametro default

function newUser(name,age,country){

    var name = name || 'Santiago';
    var age = age || 34
    var country = country || 'COL'

    console.log(name,age,country)

}

newUser()
newUser('David',15,'RU')

//Forma mas cool de hacerlo

function newAdmin(name='Alex',age=43,country='BOL'){

    console.log(name,age,country)

}

newAdmin()
newAdmin('pedro',45,'ESP')
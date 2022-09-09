const entries = new Map([["name","San"],["age",34]])


const user ={name:'San', age:45, country:'COL'}

const array = Object.entries(user)
console.log(Object.fromEntries(array))
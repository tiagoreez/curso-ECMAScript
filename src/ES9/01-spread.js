const user = {username:'reez',age:34, country:'COL'}

const {username, ...values}= user
console.log(username, values)
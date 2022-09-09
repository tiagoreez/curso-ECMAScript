//antes de ECMAScript 6

let hello = 'Hello'
let world = 'World'

let sentence = hello + ' ' + world + '!'

//Con ECMAScript 6 -> Template Literals

let coolSentence = `${hello} ${world}!`

//Multi-line string

let lorem = 'esto es uin string \n'+'esto es otra linea'

let coolLorem = `esto es un string cool
con dos lineas`

console.log(lorem)
console.log(coolLorem)
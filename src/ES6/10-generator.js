function* iterate(array){

    for(let value of array){

        yield value

    }


}

const it = iterate(['san','lin', 'hyung'])


console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
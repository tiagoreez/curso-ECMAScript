//flat

const array = [1,2,4,15,225,[1,2,4,5,6,[1,1,4,15]]]

console.log(array.flat(2))



const array2 = [1,2,3,4,5]

console.log(array2.flatMap(v =>[v, v * 2] ))
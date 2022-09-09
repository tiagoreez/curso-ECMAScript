;const regex =/\b(apple)+\b/g

const fruit = 'apple, pear, pineapple, etc. apple'

for(const match of fruit.matchAll(regex)){

    console.log(match)

}
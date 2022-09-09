const promise= ()=>{

    return new Promise((resolve,reject)=>{

        if(true){

            resolve('Hey lets go')

        }else{

            reject('ugh')

        }



    })

}


promise()
    .then(response => console.log(response))
    .catch(err=>console.log(err))
    .finally(()=> console.log('Finally'))
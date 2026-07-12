function createpromise(){
    return new Promise((resolve,reject)=>{
        const success = Math.random()>0.5
        if(success){
            resolve("Operation sucessfull")
        } else{
            reject("Operation failed")
        }
    })
}

try{
    const promise1 = createpromise()
    const promise2 = createpromise()
    const promise3 = createpromise()
    const result = await Promise.all([promise1,promise2,promise3])
    console.log(result)
} catch(err){
    console.log(err)
}

const favouritefilm={
    title:"top gun",
    year:"1986",
    star:"Tom Cruise",
    director:"Tony Scott"
}

const{title,year,star,director} = favouritefilm

console.log(`My favourite film is ${title} starring ${star}. it is directed by ${director}`)



try{
    const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts",{
        method: 'POST',
        body: JSON.stringify({
            title: "Holiday Nightmares",
            body: "When I was Kidnapped in Scotland",
            userid: 890
        }),
        headers:{
            "Content-Type": "application/json"
        }
        
    })
    if(!response.ok){
        throw new Error("There is an API issue")
    }
    const data = await response.json()
    console.log(data)
} catch(err){
    console.log(err)

} finally{
    console.log("the operation completed")
}

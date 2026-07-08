function selectitems(item){
    let price = 0

    switch(item){
        case "coffee":
            price = 20
            break
    }
    switch(item){
        case "sandwiches":
            price = 40
            break 
    }
    switch(item){
        case "Salad":
            price =50
            break
    }
    switch(item){
        case "lemon cake":
            price = 70
            break
    }

    return `You selected ${item}. That will be ₹${price}`

}

console.log(selectitems("Salad"))

function selectitems(item){
    let price = 0

    switch(item){
        case "coffee":
            price = 20
            break
    
        case "sandwiches":
            price = 40
            break 
    
        case "Salad":
            price =50
            break
    
        case "lemon cake":
            price = 70
            break

        default:
            return `Sorry,we don't sell ${item}`
    }

    return `You selected ${item}. That will be ₹${price}`

}

console.log(selectitems("Salad"))

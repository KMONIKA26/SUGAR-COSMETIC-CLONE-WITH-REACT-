export const checkIfProductInCart = (id, cart) => {
    let ans = false;
    cart.forEach(el => {
        if(id === el.id){
            ans = true;
        }
    })
    
    return ans
}

export const calculateTotal = (cart) => {
    return cart.reduce(function (previousValue, currentValue) {
        return previousValue + Number(currentValue.price)
    }, 0)
}
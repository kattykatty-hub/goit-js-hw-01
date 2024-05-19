function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}

 console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"

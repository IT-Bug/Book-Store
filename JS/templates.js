
function getPriceTemplate(i){
    let book = books[i];
    return `
        <strong>${book.price.toFixed(2)} €</strong>
        <p></p>
    `
}
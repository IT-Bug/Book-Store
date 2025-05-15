
function init(){
    renderPrice();
}

function renderPrice(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    books.findIndex((price) => { return price["price"] == true});
    
    for (let indexPrice = 0; indexPrice < books.length; indexPrice++) {
        contentRef.innerHTML += getPriceTemplate(indexPrice);
    }
}

function init(){
    renderPrice();
}

function renderPrice(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let i = 0; i < 1; i++) {
        contentRef.innerHTML += getPriceTemplate(i);
    }
}
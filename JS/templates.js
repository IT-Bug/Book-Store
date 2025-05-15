

function getTitleTemplate(i){
    let titleBook = books[i];
    return `
        <p>${titleBook.name}</p>
    `
}


function getContentTemplate(i){
    let book = books[i];
    let euroFormat = book.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
   
    return `
        <div class="price-like-container">
            <p class="price-style">${euroFormat}</p>
        </div>
    
        <div class="category">
            <div>
                <p><b>Autohr</b></p> 
                <p><b>Erscheinungsjahr</b></p> 
                <p><b>Genre</b></p>
            </div>
            <div> 
                <p>: ${book.author}</p>
                <p>: ${book.publishedYear}</p>
                <p>: ${book.genre}</p>
            </div>
        </div>
    `
}
function getTitleTemplate(i){
    let titleBook = books[i];
    return `
        <p>${titleBook.name}</p>
    `
}


function getContentTemplate(i){
    let book = books[i];
    return `
        <div>
            <b>${book.price.toFixed(2)} €</b>
            <button>Heart</button>
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
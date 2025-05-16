

function getTitleTemplate(i){
    let titleBook = books[i];
    return `
        <p>${titleBook.name}</p>
    `
}


function getContentTemplate(i){
    let contentBook = books[i];
    let euroFormat = contentBook.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

    return `
        <div class="price-like-container">
            <p class="price-style">${euroFormat}</p>
        </div>
    
        <div class="category">
            <div>
                <p><b>Autor</b></p> 
                <p><b>Erscheinungsjahr</b></p> 
                <p><b>Genre</b></p>
            </div>
            <div> 
                <p>: ${contentBook.author}</p>
                <p>: ${contentBook.publishedYear}</p>
                <p>: ${contentBook.genre}</p>
            </div>
        </div>
    `
}

function getCommentsTemplate(i){
    let commentBook = books[i];

    for (let i = 0; i < commentBook.comments.length; i++) {
        let user = commentBook.comments[i];
    
    return `
        <div>
            <p><b>${user.name}</b></p> 
        </div>
        <div>
            <p>: ${user.comment}</p>
        </div>


        `
    }
}
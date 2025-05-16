
// Title Template

function getTitleTemplate(i){
    let titleBook = books[i];
    return `
        <p>${titleBook.name}</p>
    `
}

// Content Template 

function getContentTemplate(i){
    let contentBook = books[i];
    let euroFormat = contentBook.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    let likeButton = Math.floor(contentBook.likes);

    return `
        <div class="price-like-container">
            <p class="price-style">${euroFormat}</p>
            <div class="likes">
                <p>${likeButton}</p><button>Heart</button>
            </div>
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

// Comment Template

function getCommentsTemplate(i){
    let commentBook = books[i];
    let htmlCommentTemplate = "";

    for (let i = 0; i < commentBook.comments.length; i++) {
        let user = commentBook.comments[i];
    
    htmlCommentTemplate +=`
            
        <div class="comment-structure">
            <p class="comment-name"><b>${user.name}</b></p> 

            <p class="comment-text">: ${user.comment}</p>
        </div>


        `;
    }

    return htmlCommentTemplate;
}
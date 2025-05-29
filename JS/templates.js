
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

    return `
        <div class="price-like-container">
            <p class="price-style">${euroFormat}</p>

            <div class="likes">
            <p id="likeCount">${contentBook.likes}</p>
                <label class="ui-like">
                    <input id="likeBtn" onclick="likeBook()" type="checkbox" ${contentBook.liked ? 'checked' : ''}>
                    <div class="like">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/>
                        </svg>
                    </div>
                </label>
            </div>
        </div>
    
        <div class="category">
            <div>
                <p><b>Author</b></p> 
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
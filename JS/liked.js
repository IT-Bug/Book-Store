
function likeBook() {
    let book = books[currentBookIndex];
    let likeCountRef = document.getElementById('likeCount');
    
    if (book.liked) {
        book.likes--;
        book.liked = false;
    } else {
        book.likes++;
        book.likes = true;
    }

    likeCountRef.textContent = book.likes;

    saveToLocalStorage();
}



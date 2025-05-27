// Save to Local Storage 

function saveToLocalStorage(){
    localStorage.setItem("books[currentBookIndex].comments", JSON.stringify(books[currentBookIndex].comments));
    localStorage.setItem("books[currentBookIndex].likes", JSON.stringify(books[currentBookIndex].likes));
}

// get/read from Local Storage

function getFromLocalStorage(){
    let localUserName = JSON.parse(localStorage.getItem("books[currentBookIndex].comments"));
    let localLikeBooks = JSON.parse(localStorage.getItem("books[currentBookIndex].likes"));

    if(localUserName != null){
        books[currentBookIndex].comments = localUserName;
    }

    if (localLikeBooks != null) {
        books[currentBookIndex].likes = localLikeBooks;
    }
}
// Save to Local Storage 

function saveToLocalStorage(){
    localStorage.setItem("books", JSON.stringify(books)); 
    localStorage.setItem("books[currentBookIndex].comments", JSON.stringify(books[currentBookIndex].comments));
    
}

// get/read from Local Storage

function getFromLocalStorage(){
    let localUserName = JSON.parse(localStorage.getItem("books[currentBookIndex].comments"));
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    
    if (savedBooks) {
        books = savedBooks;
    }

    if(localUserName != null){
        books[currentBookIndex].comments = localUserName;
    }


}
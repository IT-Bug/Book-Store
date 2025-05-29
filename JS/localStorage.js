// Save to Local Storage 

function saveToLocalStorage(){
    localStorage.setItem("books", JSON.stringify(books)); 
}

// get/read from Local Storage

function getFromLocalStorage(){
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    
    if (savedBooks) {
        books = savedBooks;
    }


}
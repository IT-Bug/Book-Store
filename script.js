
let currentBookIndex = 0;

function init(){
    getFromLocalStorage();
    renderTitleName();
    renderContent();
    renderComments();
}

function renderTitleName(){
    let titleRef = document.getElementById('title');
    titleRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        titleRef.innerHTML = getTitleTemplate(currentBookIndex);
    }
}


function renderContent(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML = getContentTemplate(currentBookIndex);
    }
}

function renderComments(){
    let commentsRef = document.getElementById('comments');
    commentsRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        commentsRef.innerHTML += getCommentsTemplate(currentBookIndex);
    }
}

function addComment(){
    let inputUserNameRef = document.getElementById('inputUser');
    let inputTextRef = document.getElementById('inputText');
    let userName = inputUserNameRef.value.trim(); 
    let commentInput = inputTextRef.value.trim();

    if (userName === "" && commentInput === ""){
        alert("Gib dein Name und Kommentar ein, bevor du was versendest :)")
        inputUserNameRef.value = "";
        inputTextRef.value = "";
        return 
    } else if (userName === "") {
        alert("Vergiss nicht dein Namen zu hinterlassen :)")
        inputUserNameRef.value = "";
        inputTextRef.value = "";
        return 
    } else if (commentInput === "") {
        alert("Vergiss nicht zu kommentieren :)")
        inputUserNameRef.value = "";
        inputTextRef.value = "";
        return
    }

    books[currentBookIndex].comments.unshift({name: userName, comment: commentInput});

    saveToLocalStorage();

    init();

    inputUserNameRef.value = "";
    inputTextRef.value = "";
}

function likeBook(){
        let book = books[currentBookIndex];

    if (!book.liked) {
        book.likes += 1;
        book.liked = true;
    } else {
        book.likes -= 1;
        book.liked = false;
    }

    
    saveToLocalStorage();
    init();
}
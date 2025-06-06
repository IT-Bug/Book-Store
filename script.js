
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
    titleRef.innerHTML = getTitleTemplate(currentBookIndex);

}


function renderContent(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
        contentRef.innerHTML = getContentTemplate(currentBookIndex);

}

function renderComments(){
    let commentsRef = document.getElementById('comments');
    commentsRef.innerHTML = getCommentsTemplate(currentBookIndex);
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

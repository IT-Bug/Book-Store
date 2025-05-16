
function init(){
    renderTitleName();
    renderContent();
    renderComments();
}

function renderTitleName(){
    let titleRef = document.getElementById('title');
    titleRef.innerHTML = "";

    for (let i = 0; i < 1; i++) {
        titleRef.innerHTML = getTitleTemplate(i);
    }
}


function renderContent(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let i = 0; i < 1; i++) {
        contentRef.innerHTML = getContentTemplate(i);
    }
}

function renderComments(){
    let commentsRef = document.getElementById('comments');
    commentsRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        commentsRef.innerHTML += getCommentsTemplate(i);
    }
}
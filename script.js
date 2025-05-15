
function init(){
    renderTitleName();
    renderContent();
}

function renderTitleName(){
    let titleRef = document.getElementById('title');
    titleRef.innerHTML = "";

    for (let i = 0; i < 1; i++) {
        titleRef.innerHTML += getTitleTemplate(i);
    }
}


function renderContent(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let i = 0; i < 1; i++) {
        contentRef.innerHTML += getContentTemplate(i);
    }
}
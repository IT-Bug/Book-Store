
function init(){
    renderContent();
}

function renderContent(){
    let titleRef = document.getElementById('');
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let i = 0; i < 1; i++) {
        contentRef.innerHTML += getContentTemplate(i);
    }
}
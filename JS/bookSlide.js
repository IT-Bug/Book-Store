
function nextBtn(){
    
    currentBookIndex++;

    if (currentBookIndex >= books.length) {
        currentBookIndex = 0;

    }
    
    init();
}

function prevBtn(){
    
    currentBookIndex--;

    if (currentBookIndex <= books.length){
        currentBookIndex = -1;
    }
}
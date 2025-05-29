
function nextBtn(){
    
    currentBookIndex++;

    if (currentBookIndex >= books.length) {
        currentBookIndex = 0;

    }
    
    init();
}

function prevBtn(){
    
    currentBookIndex--;

    if (currentBookIndex < 0){
        currentBookIndex = books.length - 1;
    }

    init();
}
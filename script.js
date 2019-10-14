console.log('js is working');

let classNumber = 0;
let lastArticle = 0;
let number = 0;


function createArticle() {
 
    number = countArticles();

    let newArticle = document.createElement('article') //create new article
    const selectDiv = document.querySelector('div'); //select parent

    newArticle.className = number;
    selectDiv.appendChild(newArticle); //append the article   
};

function countArticles() {
    classNumber +=1;
    console.log('countArticles() ' +classNumber);
    return classNumber;
}



function removeArticle() {
    let a = 0;
    document.querySelectorAll('article').forEach(() => a += 1); // count all current articles

    console.log('remove Button pressed' + a);
    document.querySelectorAll('article')[a-1].remove(); //remove last article
    console.log('Article removed' + a);
};

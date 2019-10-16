console.log('js is working');

let classNumber = 0;
let lastArticle = 0;
let number = 0;


 function createArticle() {
 
    number = 'article_'+ countArticles(); // create the class name for the new article

    let newArticle = document.createElement('article') //create new article
    const selectDiv = document.querySelector('#articles'); //select parent

    newArticle.className = number; //add class name for newly created article
    selectDiv.appendChild(newArticle); //append the article  

    let newDate = document.createElement('p');
    newArticle.appendChild(newDate).innerHTML = document.querySelector('#inputDate').value;
    
    let newHeadline = document.createElement('h4');
    newArticle.appendChild(newHeadline).innerHTML = document.querySelector('#inputHeadline').value;
    
    let newText = document.createElement('p');
    newArticle.appendChild(newText).innerHTML = document.querySelector('#inputText').value;

};

function countArticles() { //create class for the new article
    classNumber +=1;
    console.log('countArticles() ' +classNumber);
    return classNumber;
}

function removeArticle() { // removes the last article created
    let a = 0;
    document.querySelectorAll('article').forEach(() => a += 1); // count all current articles

    console.log('remove Button pressed' + a);
    document.querySelectorAll('article')[a-1].remove(); //remove last article
    console.log('Article removed' + a);
};

function clearForm() { 
    document.querySelectorAll('.form-control').forEach((entries) => {
        entries.value = '';
    });
}
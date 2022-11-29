// put your globals here - hint: select elements from the HTML
const textArea = document.querySelector("#text-area");
const countBtn = document.querySelector("#countBtn");
const wordCountInput = document.querySelector("#wordCountInput");
const findWordInput = document.querySelector("#findWordInput");
const findBtn = document.querySelector("#findBtn");
const wordFoundInput = document.querySelector("#wordFoundInput");

countBtn.addEventListener('click', countWords);
findBtn.addEventListener('click', findWords);


// dont' forget to add event listeners to teh buttons

function countWords() {
  const textContent = textArea.value;
  const arr = textContent.split(" ");
  printData(arr.length, wordCountInput);
  // your code here
  // call printData
}

function findWords() {
  const foundWords = [];
  const textContent = textArea.value;
  const arr = textContent.split(" ");
  arr. forEach( (item) => {
    if (item === findWordInput.value) {
      foundWords.push(item);
    }
  });
  printData(foundWords.length, wordFoundInput);
  // put your local variable for the empty array here
  // remainder of your code follows
  // call printData
}

// change param1 and param2 to identifiers that make sense
function printData(data, destination) {
  destination.value = data;
  // your code here... one line!
  /* if I want to add words after the number
  
    if (destination == wordCountInput){
    destination.value = data + ' ' + 'words';
  } else {
    destination.value = data + ' ' + 'instances';
  }
  */
}

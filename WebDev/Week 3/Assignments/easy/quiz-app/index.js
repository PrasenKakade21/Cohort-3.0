import { quizData } from "./data.js";
        
let curr = 0;
let res = 0;

document.querySelector("form").addEventListener('submit', function(event){

    event.preventDefault();

    const selectedoption = document.querySelector('input[name="quiz"]:checked').value;
    console.log(selectedoption);
    if (selectedoption === quizData[curr].correct){
        res++;

        console.log("Success")
    }
    curr++;
    if(curr < quizData.length){

        render();
    }
    else{
        showAlert()
    }
    this.reset();
})

function render(){
    document.getElementById('question').innerHTML = quizData[curr].question;
    document.getElementById('a').innerHTML = quizData[curr].a;
    document.getElementById('b').innerHTML = quizData[curr].b;
    document.getElementById('c').innerHTML = quizData[curr].c;
    document.getElementById('d').innerHTML = quizData[curr].d;
}
function showAlert() {
    const resp = confirm("Quiz Complete! You Scored "+res+'/'+quizData.length + "\nReload Quiz? ") ;
    
    if (resp) {
      location.reload();
    } else {
        location.reload();
    }
  }
render();

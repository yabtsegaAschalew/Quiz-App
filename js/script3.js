function evaluateQuiz(){
  const question1 = document.querySelector('input[name="question1"]:checked');
  const question2 = document.querySelector('input[name="question2"]:checked');
  const question3 = document.querySelector('input[name="question3"]:checked');
  const question4 = document.querySelector('input[name="question4"]:checked');
  const question5 = document.querySelector('input[name="question5"]:checked');
  let result = 0;
  if (question1) {
    if (question1.value === 'New Delhi') {
      console.log("Correct");
      result += 1;
    } else {
      console.log("Incorrect");
    }
  } else {
    console.log("No option selected.");
    result += 0;
  }
  if(question2){
    if(question2.value == 'Canberra'){
      console.log('correct');
      result += 1;
    }
    else console.log('incorrect');
  }
  else{
    console.log('No option selected');
    result += 0;
  }
  if(question3){
    if(question3.value == 'Tokyo'){
      console.log('correct');
      result += 1;
    }
    else console.log('incorrect');
  }
  else{
    console.log('No option selected');
    result += 0;
  }
  if(question4){
    if(question4.value == 'Paris'){
      console.log('correct');
      result += 1;
    }
    else console.log('incorrect');
  }
  else{
    console.log('No option selected')
    result += 0;
  }
  if(question5){
    if(question5.value == 'Moscow'){
      console.log('correct');
      result += 1;
    }
    else console.log('incorrect');
  }
  else{
    console.log('No option selected');
    result += 0;
  }
  if((question1 == null) || (question2 == null) || (question3 == null)|| (question4 == null) ||(question5 == null)){
    return;
  }
  else{
    return result;
  }
  
}
console.log(evaluateQuiz())


    function quizResult() {
      const score = evaluateQuiz(); // Evaluate the quiz and get the score or undefined
      
      if (score === undefined) { // Check if all questions are answered
          alert("Please make sure that all the questions have been filled.");
          
          // Highlight unanswered questions
          const allQuestions = ["question1", "question2", "question3", "question4", "question5"];
          allQuestions.forEach((question) => {
              const selected = document.querySelector(`input[name="${question}"]:checked`);
              const questionDiv = document.getElementById(question);
              if (!selected && questionDiv) {
                  questionDiv.classList.add('unanswered'); // Add a CSS class to highlight
              } else if (questionDiv) {
                  questionDiv.classList.remove('unanswered'); // Remove highlight if answered
              }
          });
      } else {
          // Display the result in an existing section
          document.body.innerHTML = `<h2 style = "text-align:center">Your Quiz Result is ${score} / 5</h2>`;
      }
    };
const q1 = document.querySelector('#q1');
const q2 = document.querySelector('#q2');
const q3 = document.querySelector('#q3');
const q4 = document.querySelector('#q4');
const q5 = document.querySelector('#q5');
console.log(q1.innerText);
// Making the submit button change on a click
q1.addEventListener("click", (event)=>{
  event.preventDefault();
  if(q1.innerText == "Submit"){
    q1.innerText = "Submitted";
    document.querySelector('#reference1').classList.add('newBtn');
  }
  else if(q1.innerText == "Submitted"){
    q1.innerText = "Submit";
    document.querySelector('#reference1').classList.remove('newBtn');
  }
})
q2.addEventListener("click", (event)=>{
  event.preventDefault();
  if(q2.innerText == "Submit"){
    q2.innerText = "Submitted";
    document.querySelector('#reference2').classList.add('newBtn');
  }
  else if(q2.innerText == "Submitted"){
    q2.innerText = "Submit";
    document.querySelector('#reference2').classList.remove('newBtn');
  }
})
q3.addEventListener("click", (event)=>{
  event.preventDefault();
  if(q3.innerText == "Submit"){
    q3.innerText = "Submitted";
    document.querySelector('#reference3').classList.add('newBtn');
  }
  else if(q3.innerText == "Submitted"){
    q3.innerText = "Submit";
    document.querySelector('#reference3').classList.remove('newBtn');
  }
})
q4.addEventListener("click", (event)=>{
  event.preventDefault();
  if(q4.innerText == "Submit"){
    q4.innerText = "Submitted";
    document.querySelector('#reference4').classList.add('newBtn');
  }
  else if(q4.innerText == "Submitted"){
    q4.innerText = "Submit";
    document.querySelector('#reference4').classList.remove('newBtn');
  }
})
q5.addEventListener("click", (event)=>{
  event.preventDefault();
  if(q5.innerText == "Submit"){
    q5.innerText = "Submitted";
    document.querySelector('#reference5').classList.add('newBtn');
  }
  else if(q5.innerText == "Submitted"){
    q5.innerText = "Submit";
    document.querySelector('#reference5').classList.remove('newBtn');
  }
})
const reset = document.querySelectorAll('input[type="reset"]');
let resetArr = Array.from(reset);
resetArr.forEach((reset)=>{
  reset.addEventListener('click', ()=>{
    if(q1.innerText == "Submitted"){
      q1.innerText = "Submit";
      document.querySelector('#reference1').classList.remove('newBtn');
    }
    if(q2.innerText == "Submitted"){
      q2.innerText = "Submit";
      document.querySelector('#reference2').classList.remove('newBtn');
    }
    if(q3.innerText == "Submitted"){
      q3.innerText = "Submit";
      document.querySelector('#reference3').classList.remove('newBtn');
    }
    if(q4.innerText == "Submitted"){
      q4.innerText = "Submit";
      document.querySelector('#reference4').classList.remove('newBtn');
    }
    if(q5.innerText == "Submitted"){
      q5.innerText = "Submit";
      document.querySelector('#reference5').classList.remove('newBtn');
    }
  })
  
});


function timer() {
  const duration = 5 * 60 * 1000; // 5 minutes in milliseconds
  const endingTime = Date.now() + duration;

  const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = endingTime - currentTime;

      if (remainingTime <= 0) {
          clearInterval(intervalId); // Stop the timer
          alert("Time's up! The quiz will now be submitted.");
          quizResult(); // Automatically submit the quiz
          
      }
    })
  }
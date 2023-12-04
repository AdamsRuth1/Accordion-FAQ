// Get references to all elements with the specified class names
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

// Define a function named revealContent
function revealContent(index) {
  // Loop through all answer elements
  answers.forEach((answer, i) => {
    // Toggle the display property based on the index
    answer.style.display = i === index && answer.style.display !== 'block' ? 'block' : 'none';
  });
}

// Loop through each question element and add a click event listener
questions.forEach((question, index) => {
  question.addEventListener('click', () => revealContent(index));
});

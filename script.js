// script.js

function checkAnswer(questionNumber, correctAnswer) {
    const userAnswer = document.getElementById(`answer${questionNumber}`).value.trim().toLowerCase();
    const feedback = document.getElementById(`feedback${questionNumber}`);

    if (userAnswer === correctAnswer.toLowerCase()) {
        feedback.textContent = 'Correct! Proceeding to the next question...';
        feedback.style.color = '#00ff88';

        // Hide the current question and show the next one
        document.getElementById(`question${questionNumber}`).style.display = 'none';
        const nextQuestion = document.getElementById(`question${questionNumber + 1}`);
        
        if (nextQuestion) {
            nextQuestion.style.display = 'block';
        } else {
            // If there are no more questions, show the success message
            document.getElementById('successMessage').style.display = 'block';
        }
    } else {
        feedback.textContent = 'Incorrect, try again!';
        feedback.style.color = '#ff6666';
    }
}

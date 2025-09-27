// Quiz functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle quiz submission
    const quizForms = document.querySelectorAll('.quiz-form');
    quizForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            checkAnswers(form);
        });
    });
    
    // Add event listeners to quiz options for immediate feedback
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            // For radio buttons, select the clicked option
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });
});

function checkAnswers(form) {
    const questions = form.querySelectorAll('.quiz-question');
    let score = 0;
    let total = questions.length;
    
    questions.forEach(question => {
        const questionId = question.dataset.questionId;
        const selectedOption = question.querySelector('input[name="' + questionId + '"]:checked');
        const correctAnswer = question.dataset.correct;
        
        if (selectedOption) {
            const selectedValue = selectedOption.value;
            
            // Clear previous styling
            question.querySelectorAll('.quiz-option').forEach(option => {
                option.classList.remove('correct', 'incorrect');
            });
            
            // Apply styling based on correctness
            if (selectedValue === correctAnswer) {
                selectedOption.parentElement.classList.add('correct');
                score++;
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                // Highlight the correct answer
                const correctOption = question.querySelector('input[value="' + correctAnswer + '"]').parentElement;
                correctOption.classList.add('correct');
            }
        }
    });
    
    // Show score
    const resultDiv = form.querySelector('.quiz-result');
    if (resultDiv) {
        let message = '';
        const percentage = Math.round((score / total) * 100);
        
        if (percentage >= 80) {
            message = `Excellent! You scored ${score} out of ${total} (${percentage}%)`;
        } else if (percentage >= 60) {
            message = `Good job! You scored ${score} out of ${total} (${percentage}%)`;
        } else {
            message = `You scored ${score} out of ${total} (${percentage}%). Review the material and try again!`;
        }
        
        resultDiv.innerHTML = `<p>${message}</p>`;
        resultDiv.style.display = 'block';
        
        // Add styling based on score with neon green color scheme
        if (percentage >= 80) {
            resultDiv.style.backgroundColor = 'rgba(198, 255, 0, 0.1)';
            resultDiv.style.color = '#C6FF00';
            resultDiv.style.borderColor = '#C6FF00';
            resultDiv.style.boxShadow = '0 0 15px rgba(198, 255, 0, 0.3)';
        } else if (percentage >= 60) {
            resultDiv.style.backgroundColor = 'rgba(198, 255, 0, 0.05)';
            resultDiv.style.color = '#B8FF2C';
            resultDiv.style.borderColor = '#B8FF2C';
            resultDiv.style.boxShadow = '0 0 10px rgba(184, 255, 44, 0.2)';
        } else {
            resultDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            resultDiv.style.color = '#ffffff';
            resultDiv.style.borderColor = '#666666';
            resultDiv.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
        }
    }
}

// Simple navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
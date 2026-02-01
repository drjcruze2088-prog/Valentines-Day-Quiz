function checkAnswer(answer) {
    const correctAnswer = "Delhi";
    const result = document.getElementById("result");

    if (answer === correctAnswer) {
        result.innerHTML = "✅ Correct Answer!";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Wrong Answer!";
        result.style.color = "red";
    }
}

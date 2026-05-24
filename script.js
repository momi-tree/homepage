const questions = document.querySelectorAll(".faq-question");

questions.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

window.addEventListener("load", () => {
  const opening = document.getElementById("opening");
  const siteContent = document.getElementById("site-content");

  setTimeout(() => {
    // フェード開始
    opening.classList.add("fade-out");
    siteContent.classList.add("show");
  }, 2000); // ←表示時間（調整OK）

  setTimeout(() => {
    // 完全に消す（クリック防止）
    opening.style.display = "none";
  }, 3000);
});

const answerButtons = document.querySelectorAll(".answer-list button");
const explanation = document.querySelector(".explanation");

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.dataset.correct === "true";

    answerButtons.forEach((btn) => {
      btn.disabled = true;
    });

    if (isCorrect) {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");

      const correctButton = document.querySelector('[data-correct="true"]');
      correctButton.classList.add("correct");
    }

    explanation.classList.add("show");
  });
});
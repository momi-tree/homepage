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
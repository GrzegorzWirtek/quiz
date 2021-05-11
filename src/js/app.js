import "normalize.css";
import "../scss/main.scss";
import view from "./quiz-view.js";

window.addEventListener("DOMContentLoaded", () => {
    const quiz = new view();
    quiz.firstView();
})
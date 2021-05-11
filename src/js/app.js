import "normalize.css";
import "../scss/main.scss";
import Wiev from "./quiz-wiev.js";

window.addEventListener("DOMContentLoaded", () => {
    const quiz = new Wiev();
    quiz.firstWiev();
})
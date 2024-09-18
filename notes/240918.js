const problems = [
    {
        prompt: "M39 GUN에 사용되는 20MM 탄약의 Link Type은?",
        options: ["M14", "M12", "M11", "M10"],
        answer: 2,
    },
    {
        prompt: "MK-82 GP BOMB에 MAU-93 Conical Fin 장착 시 사용되는 Shaft Type은?",
        options: ["MAU-86/B-5", "MAU-86/B-6", "MAU-86/B-7", "MAU-86/B-8"],
        answer: 1,
    },
]

const quizEl = document.querySelector("#quiz");
const quizPromptInputEl = document.querySelector("#quiz-prompt-input");
const quizPromptOutputEl = document.querySelector("#quiz-prompt-output");
const quizAnswerInputEl = document.querySelector("#quiz-answer-input");
const quizAnswerOutputEl = document.querySelector("#quiz-answer-output");

function updateOutput() {
    const promptInput = quizPromptInputEl.value - 1;
    const answerInput = quizAnswerInputEl.value;
    const prompt = problems[promptInput].prompt;
    const options = problems[promptInput].options;
    const answer = problems[promptInput].answer;

    const p = document.createElement("p");
    p.textContent = prompt;
    const ol = document.createElement("ol");
    quizPromptOutputEl.replaceChildren(p, ol);
    quizAnswerOutputEl.value = (answerInput == answer) ? "Correct" : "Incorrect";
}

quizEl.addEventListener("input", updateOutput);
updateOutput();

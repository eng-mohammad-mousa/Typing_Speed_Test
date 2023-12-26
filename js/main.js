"use strict";
const contentBoxSection = document.querySelector('.content-box'), typingContainerSection = document.querySelector('.words'), typingTextSection = document.querySelector('.words p'), tryAgainBtn = document.querySelector('.try-again'), inputField = document.querySelector('.input-field'), timeTag = document.querySelector('.time b'), mistakeTag = document.querySelector('.mistake span'), wpmTag = document.querySelector('.wpm span'), cpmTag = document.querySelector('.cpm span');
var t = 60;
let charIndex = 0, CPM = 0, WPM = 0, mistakes = 0, isTyping = false, timer, maxTime = t, timeLeft = maxTime;
function randomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
function formatWord(word, word_Number) {
    return `
    <div class="word word_${word_Number}">
        <span class="letter">${word.split('').join('</span><span class="letter">')}</span>
    </div>
    <span class="letter space">&nbsp;</span>
    `;
}
function preparingGame() {
    typingTextSection.innerHTML = '';
    typingTextSection.classList.remove('blur');
    for (let i = 0; i < 250; i++) {
        typingTextSection.innerHTML += formatWord(randomWord(), i);
    }
    typingContainerSection.scrollTo(0, 0);
    typingTextSection.querySelectorAll('.letter')[0].classList.add('active');
    document.addEventListener('keydown', () => inputField.focus());
    typingTextSection.addEventListener('click', () => inputField.focus());
    typingTextSection.addEventListener("wheel", (event) => event.preventDefault());
}
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();
    }
});
function initTyping() {
    if (timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        let characters = typingTextSection.querySelectorAll('.letter');
        let typedChar = inputField.value.split('')[charIndex];
        if (typedChar == null) {
            charIndex--;
            characters[charIndex].classList.contains('incorrect') ? mistakes-- : mistakes;
            characters[charIndex].classList.contains('correct') ? CPM-- : CPM;
            characters[charIndex].classList.remove('correct', 'incorrect');
        }
        else if ((typedChar == characters[charIndex].innerText) || (typedChar == " " && characters[charIndex].classList.contains('space'))) {
            CPM++;
            characters[charIndex].classList.add('correct');
            charIndex++;
        }
        else {
            mistakes++;
            characters[charIndex].classList.add('incorrect');
            charIndex++;
        }
        var position = characters[charIndex].getBoundingClientRect().top - contentBoxSection.getBoundingClientRect().top;
        if (position <= 0) {
            typingContainerSection.scrollBy(0, -38);
        }
        else if (position > 94) {
            typingContainerSection.scrollBy(0, 38);
        }
        characters.forEach(span => span.classList.remove('active'));
        characters[charIndex].classList.add('active');
        mistakeTag.innerText = `${mistakes}`;
        cpmTag.innerText = `${CPM}`;
        WPM = Math.round(((CPM / 5) / (maxTime - timeLeft)) * 60);
        WPM = WPM < 0 || !WPM || WPM === Infinity ? 0 : WPM;
        wpmTag.innerText = `${WPM}`;
    }
    else {
        timeExpired();
    }
}
function initTimer() {
    timeLeft--;
    if (timeLeft > 0) {
        timeTag.innerText = `${timeLeft}s`;
    }
    else {
        timeExpired();
    }
}
function timeExpired() {
    typingTextSection.classList.add('blur');
    clearInterval(timer);
    inputField.value = '';
    timeTag.innerText = `Timer Over`;
    typingTextSection.querySelectorAll('.letter').forEach(span => span.classList.remove('active'));
}
function resetGame() {
    preparingGame();
    clearInterval(timer);
    inputField.value = '';
    isTyping = false;
    charIndex = mistakes = WPM = CPM = 0;
    maxTime = t;
    timeLeft = maxTime;
    timeTag.innerText = `${timeLeft}s`;
    mistakeTag.innerText = `${mistakes}`;
    cpmTag.innerText = `${CPM}`;
    wpmTag.innerText = `${WPM}`;
}
inputField.addEventListener('input', initTyping);
tryAgainBtn.addEventListener('click', resetGame);
preparingGame();

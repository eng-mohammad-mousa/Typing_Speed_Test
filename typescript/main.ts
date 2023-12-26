declare var words: string[];

const
    contentBoxSection = document.querySelector('.content-box') as HTMLElement,
    typingContainerSection = document.querySelector('.words') as HTMLElement,
    typingTextSection = document.querySelector('.words p') as HTMLElement,
    tryAgainBtn = document.querySelector('.try-again') as HTMLInputElement,
    inputField = document.querySelector('.input-field') as HTMLInputElement,
    timeTag = document.querySelector('.time b') as HTMLInputElement,
    mistakeTag = document.querySelector('.mistake span') as HTMLInputElement,
    wpmTag = document.querySelector('.wpm span') as HTMLInputElement,
    cpmTag = document.querySelector('.cpm span') as HTMLInputElement;

var t: number = 60;

let
    charIndex: number = 0,
    CPM: number = 0, WPM: number = 0, mistakes: number = 0,
    isTyping: boolean = false,
    timer: number, maxTime: number = t, timeLeft: number = maxTime;

function randomWord(): string {
    // Getting random number and it'll always less than the words array length
    const randomIndex: number = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function formatWord(word: string, word_Number: number): string {
    return `
    <div class="word word_${word_Number}">
        <span class="letter">${word.split('').join('</span><span class="letter">')}</span>
    </div>
    <span class="letter space">&nbsp;</span>
    `;
}

function preparingGame(): void {

    // Remove All (when user click on 'Try Again' => clear all then add new words)
    typingTextSection.innerHTML = '';
    typingTextSection.classList.remove('blur');
    // Add Words
    for (let i = 0; i < 250; i++) {
        typingTextSection.innerHTML += formatWord(randomWord(), i);
    }
    // Scroll to first letter
    typingContainerSection.scrollTo(0, 0);
    // Add animation to first letter 
    typingTextSection.querySelectorAll('.letter')[0].classList.add('active');

    // focusing input field on keydown or click event
    document.addEventListener('keydown', () => inputField.focus());
    typingTextSection.addEventListener('click', () => inputField.focus());
    // to prevent user scroll down (user must see only first 5 rows)
    typingTextSection.addEventListener("wheel", (event) => event.preventDefault());

}

// To prevent the user from erasing everything at the same time so he must erase character by character
// Ctrl + A is disabled.
document.addEventListener('keydown', function (event) {
    // Check if the Ctrl key and the A key are pressed simultaneously
    if (event.ctrlKey && event.key === 'a') {
        // Prevent the default behavior of the event
        event.preventDefault();
    }
});

function initTyping(): void {

    if (timeLeft > 0) {

        // one timer is start, it won't restart again on every key clicked
        if (!isTyping) { timer = setInterval(initTimer, 1000); isTyping = true; }

        let characters = <NodeListOf<HTMLElement>>typingTextSection.querySelectorAll('.letter');
        let typedChar = inputField.value.split('')[charIndex];
        // console.log(`'${characters[charIndex].innerText}  ---  ${typedChar}'`);

        // if user hasn't entered any character or pressed backspace
        if (typedChar == null) {
            charIndex--;
            characters[charIndex].classList.contains('incorrect') ? mistakes-- : mistakes;
            characters[charIndex].classList.contains('correct') ? CPM-- : CPM;
            characters[charIndex].classList.remove('correct', 'incorrect');

        } else if ((typedChar == characters[charIndex].innerText) || (typedChar == " " && characters[charIndex].classList.contains('space'))) {
            CPM++;
            characters[charIndex].classList.add('correct');
            charIndex++;
        } else {
            mistakes++;
            characters[charIndex].classList.add('incorrect');
            charIndex++;
        }


        var position: number = characters[charIndex].getBoundingClientRect().top - contentBoxSection.getBoundingClientRect().top;
        // Keep the writing at eye level on the third line
        // 5 line (0 - 38 - 76 - 114 - 152 - 190) && css = 190px
        // The difference between characters & contentBoxSection 
        // 18 - 56 - 94 - 132
        // We need to stay at 94 (on the third line)
        if (position <= 0) {
            typingContainerSection.scrollBy(0, -38);
        } else if (position > 94) {
            typingContainerSection.scrollBy(0, 38);
        }


        characters.forEach(span => span.classList.remove('active'));
        characters[charIndex].classList.add('active');

        mistakeTag.innerText = `${mistakes}`;
        cpmTag.innerText = `${CPM}`;

        WPM = Math.round(((CPM / 5) / (maxTime - timeLeft)) * 60);
        WPM = WPM < 0 || !WPM || WPM === Infinity ? 0 : WPM; // if wpm value is 0 or empty or infinity the setting it's value to 0
        wpmTag.innerText = `${WPM}`;


    } else {
        timeExpired();
    }
}

function initTimer(): void {
    timeLeft--;
    if (timeLeft > 0) {
        timeTag.innerText = `${timeLeft}s`;
    } else {
        timeExpired();
    }
}

function timeExpired(): void {
    typingTextSection.classList.add('blur');
    clearInterval(timer);

    inputField.value = '';
    timeTag.innerText = `Timer Over`;

    typingTextSection.querySelectorAll('.letter').forEach(span => span.classList.remove('active'));
}

function resetGame(): void {

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
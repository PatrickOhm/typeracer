export function processInputValue(state, input, text) {
    const word = text.split(' ')[state.currentWordIndex] + ' ';

    if (input.length < state.inputValue.length && text[state.currentIndex - 1] !== ' ') {
        handleBackspace(state, input, text);
        return;
    }

    if (input.length < state.inputValue.length && state.errorCount > 0) {
        handleErrorCorrection(state);
        state.inputValue = input;
        return;
    }

    state.inputValue = input;

    if (input[input.length - 1] === text[state.currentIndex]) {
        handleCorrectLetter(state, word);
    } else {
        handleTypingError(state);
    }


    if (input === word) {
        handleCorrectWord(state);
    }
}

export function handleBackspace(state, input, text) {
    if (state.errorCount > 0) handleErrorCorrection(state);

    if (state.currentIndex === 0) {
        state.inputValue = input;
        return;
    }

    const slicedText = text.slice(0, state.currentIndex - 1).slice(-input.length);

    if (slicedText === input || input === '') {
        state.currentIndex--;
    }

    state.inputValue = input;
}

export function handleCorrectLetter(state, word) {
    if (word.includes(state.inputValue)) {
        state.currentIndex++;
    } else {
        handleTypingError(state);
    }
}

export function handleCorrectWord(state) {
    state.inputValue = '';
    state.currentWordIndex++;
}

export function checkTextCompletion(state, text) {
    if (state.currentIndex === text.length) {
        handleTextCompletion(state, text);
    }
}

export function handleTextCompletion(state, text) {
    state.currentIndex = 0;
    state.currentWordIndex = 0;
    state.inputValue = '';

    const secondsElapsed = (Date.now() - state.timeStampStart) / 1000;
    const cpm = Math.floor(text.length / (secondsElapsed / 60));
    const accuracy = Math.floor(100 - ((state.errorsTotal / text.length) * 100));

    state.speed = cpm;
    state.accuracy = accuracy;
    state.time = parseFloat(secondsElapsed.toFixed(2));

    state.timeStampStart = null;
    state.errorsTotal = 0;
    state.raceOn = false;
}

function handleTypingError(state) {
    state.errorCount++;
    state.errorsTotal++;
}

function handleErrorCorrection(state) {
    state.errorCount--;
}

export function randomIndex(arr) {
    return Math.floor(Math.random() * (arr.length - 1));
}




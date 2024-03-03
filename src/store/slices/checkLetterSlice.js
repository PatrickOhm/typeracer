import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import * as helpers from "../../helpers"

const checkLetterSlice = createSlice({
    name: 'checkLetter',
    initialState: {
        currentIndex: 0,
        currentWordIndex: 0,
        currentTextIndex: 9,
        inputValue: '',
        data: data.english,
        timeStampStart: null,
        errorCount: 0,
        errorsTotal: 0,
        raceOn: false,
        language: 'english',
        speed: null,
        time: null,
        accuracy: null,
        createTextInput: '',
        statistics: {
            speed: [],
            accuracy: [],
            time: []
        }
    },
    reducers: {
        handleInputValue(state, action) {
            const currentText = state.data[state.currentTextIndex];

            helpers.processInputValue(state, action.payload, currentText);
            helpers.checkTextCompletion(state, currentText);
        },

        setRaceOnTrue(state, action) {
            state.raceOn = true;
            if (action.payload === 'next') {
                state.language === 'english' ? state.data = data.english : state.data = data.german;
                state.currentTextIndex = helpers.randomIndex(state.data);
            }
        },

        setRaceOnFalse(state, action) {
            const currentText = state.data[state.currentTextIndex];

            state.raceOn = false;
            helpers.handleTextCompletion(state, currentText);
            state.errorCount = 0;
        },

        setLanguage(state, action) {
            if (action.payload === 'english') { state.language = 'english'; state.data = data.english }
            if (action.payload === 'german') { state.language = 'german'; state.data = data.german }
        },

        handleCreateTextInput(state, action) {
            state.createTextInput = action.payload;
        },

        createText(state, action) {
            state.currentTextIndex = 0;
            state.data = [action.payload];
            state.raceOn = true;
            state.createTextInput = '';
        },

        updateStatistics(state, action) {
            state.statistics.speed.push(action.payload.speed);
            state.statistics.accuracy.push(action.payload.accuracy);
            state.statistics.time.push(action.payload.time);
        },

        setTimeStampStart(state, action) {
            if (state.timeStampStart === null) {
                state.timeStampStart = action.payload;
            }
        }
    }
});



export const {
    changeCurrentLetter,
    handleInputValue,
    setRaceOnTrue,
    setRaceOnFalse,
    setLanguage,
    handleCreateTextInput,
    createText,
    updateStatistics,
    setTimeStampStart
} = checkLetterSlice.actions;

export const checkLetterReducer = checkLetterSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import {
    checkLetterReducer,
    changeCurrentLetter,
    handleInputValue,
    setRaceOnTrue,
    setRaceOnFalse,
    setLanguage,
    handleCreateTextInput,
    createText,
    updateStatistics,
    setTimeStampStart
} from "./slices/checkLetterSlice";

const store = configureStore({
    reducer: {
        checkLetter: checkLetterReducer,
    }
});

export {
    store,
    changeCurrentLetter,
    handleInputValue,
    setRaceOnTrue,
    setRaceOnFalse,
    setLanguage,
    handleCreateTextInput,
    createText,
    updateStatistics,
    setTimeStampStart
};
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../store';

function Navbar({ stopGame, openCreateText, openStatistics }) {
    const dispatch = useDispatch();
    const language = useSelector(state => state.checkLetter.language);
    const raceOn = useSelector(state => state.checkLetter.raceOn);

    const handleChooseGerman = () => {
        if (raceOn) { stopGame(); }
        dispatch(setLanguage('german'));
    }

    const handleChooseEnglish = () => {
        if (raceOn) { stopGame(); }
        dispatch(setLanguage('english'));
    }

    const handleCreateText = () => {
        openCreateText();
    }

    return (
        <div className="absolute bg-slate-950 text-white w-full flex justify-between select-none">
            <div
                className="hover:bg-sky-700 p-4 px-8 cursor-pointer font-bold transition-all rounded-md"
                onClick={stopGame}
            >
                <span className='border-2 rounded-md p-2 px-6'>RACE</span>
            </div>
            <div className="flex">
                <div className="group relative">
                    <div className="p-4 px-6 pr-10 hover:bg-sky-700 cursor-pointer transition-all rounded-md">
                        Choose language
                        <div className="arrow-down"></div>
                    </div>
                    <div className="absolute hidden rounded-md left-0 bg-slate-950 group-hover:block w-full transition-all">
                        <div
                            onClick={handleChooseGerman}
                            className={
                                `cursor-pointer hover:bg-sky-700 p-4 px-6 w-full transition-all rounded-md
                            ${language === 'german' ? 'text-yellow-300' : ''}`
                            }>German</div>
                        <div
                            onClick={handleChooseEnglish}
                            className={
                                `cursor-pointer hover:bg-sky-700 p-4 px-6 w-full transtion-all rounded-md
                            ${language === 'english' ? 'text-yellow-300' : ''}`
                            }>English</div>
                    </div>
                </div>
                <div
                    onClick={handleCreateText}
                    className="p-4 px-6 hover:bg-sky-700 cursor-pointer transition-all rounded-md"
                >Create text</div>
                <div
                    onClick={openStatistics}
                    className="p-4 px-6 hover:bg-sky-700 cursor-pointer transition-all rounded-md"
                >Statistics</div>
            </div>
        </div>
    );
}

export default Navbar;

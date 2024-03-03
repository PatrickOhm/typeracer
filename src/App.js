import RaceReport from "./components/RaceReport";
import Countdown from "./components/Countdown";
import StartScreen from "./components/StartScreen";
import Navbar from "./components/Navbar";
import CreateText from "./components/CreateText";
import Statistics from "./components/Statistics";


import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setRaceOnTrue, setRaceOnFalse } from "./store";



function App() {
    const dispatch = useDispatch();
    const { raceOn } = useSelector(state => state.checkLetter);
    const [initialRender, setInitialRender] = useState(true);
    const [createTextOpen, setCreateTextOpen] = useState(false);
    const [statisticsOpen, setStatisticsOpen] = useState(false);

    const handleStartGame = () => {
        setInitialRender(false);
        dispatch(setRaceOnTrue());
    }

    const handleOpenStatistics = () => {
        setInitialRender(false);
        setCreateTextOpen(false);
        setStatisticsOpen(true);
        dispatch(setRaceOnFalse());
    }

    const handleOpenStartScreen = () => {
        setInitialRender(true);
        setCreateTextOpen(false);
        setStatisticsOpen(false);
        dispatch(setRaceOnFalse());
    }

    const handleOpenCreateText = () => {
        setCreateTextOpen(true);
        setInitialRender(false);
        setStatisticsOpen(false);
        dispatch(setRaceOnFalse());
    }

    const handleCloseCreateText = () => {
        setCreateTextOpen(false);
    }

    const renderStartScreen = () => (
        <StartScreen
            startGame={handleStartGame}
        />
    );

    const renderRaceContent = () => (
        raceOn ? <Countdown /> : <RaceReport />
    );

    const renderCreateText = () => (
        <CreateText
            closeCreateText={handleCloseCreateText}
        />
    )

    const renderStatistics = () => (
        <Statistics />
    )

    const renderContent = () => {
        if (createTextOpen) {
            return renderCreateText();
        } else if (statisticsOpen) {
            return renderStatistics();
        } else {
            return renderRaceContent();
        }
    }

    return (
        <div className="text-gray-900 text-xl">
            <Navbar
                stopGame={handleOpenStartScreen}
                openCreateText={handleOpenCreateText}
                openStatistics={handleOpenStatistics}
            />
            {initialRender ?
                renderStartScreen()
                : (
                    <div className="w-full">
                        {renderContent()}
                    </div>
                )}
        </div>
    )
}

export default App;
import { useSelector, useDispatch } from "react-redux";
import { setRaceOnTrue, updateStatistics } from "../store";
import { useEffect } from "react";

function RaceReport() {
    const dispatch = useDispatch();
    const { speed, time, accuracy } = useSelector(state => state.checkLetter);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 13) {
                handleNextRace();
            }

            if (event.keyCode === 8) {
                handleTryAgain();
            }
        };

        dispatch(updateStatistics({ speed, time, accuracy }))

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line
    }, []);

    const handleNextRace = () => {
        dispatch(setRaceOnTrue('next'));
    }

    const handleTryAgain = () => {
        dispatch(setRaceOnTrue());
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div
                className="w-1/3 mx-auto p-12 pt-8 bg-slate-200 rounded-md font-mono"
            >
                <div className="text-center mb-8 font-bold underline">Race Report</div>
                Speed: <span className="float-right">{speed} cpm</span><br />
                Time: <span className="float-right">{time} sec</span><br />
                Accuracy: <span className="float-right">{accuracy} %</span>
            </div>
            <div className="w-1/3 flex justify-between rounded-md p-3 bg-slate-200">
                <button
                    className="bg-slate-950 text-white p-2 rounded-md w-36 hover:bg-sky-700 transition-all"
                    onClick={handleTryAgain}
                >Try Again
                </button>
                <button
                    className="bg-slate-950 text-white p-2 rounded-md w-36 hover:bg-sky-700 transition-all"
                    onClick={handleNextRace}
                >Next Race
                </button>
            </div>
        </div>
    )
}

export default RaceReport;
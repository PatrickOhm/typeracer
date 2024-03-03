import { useState } from "react";
import { useSelector } from "react-redux";

function Statistics() {
    const [allTimeActive, setAllTimeActive] = useState(true);
    const statistics = useSelector(state => state.checkLetter.statistics)

    const calculateAverage = (arr, allTimeActive) => {
        const sliced = allTimeActive ? arr : arr.slice(-10);
        return sliced.reduce((a, b) => a + b) / sliced.length;
    }

    const average = {
        speed: Math.round(calculateAverage(statistics.speed, allTimeActive)),
        accuracy: Math.round(calculateAverage(statistics.accuracy, allTimeActive)),
        time: calculateAverage(statistics.time, allTimeActive).toFixed(2)
    }

    const renderData = () => {
        return (
            <div className="font-mono p-12">
                Speed: <span className="float-right">{average.speed} cpm</span><br />
                Time: <span className="float-right">{average.time} sec</span><br />
                Accuracy: <span className="float-right">{average.accuracy} %</span>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-1/3 h-64 bg-slate-200 rounded-md">
                <div>
                    <button
                        onClick={() => setAllTimeActive(true)}
                        className={`p-2 w-1/2 text-white rounded-tl-md
                        ${allTimeActive ? 'bg-slate-950' : 'bg-sky-700'}`}
                    >All time</button>
                    <button
                        onClick={() => setAllTimeActive(false)}
                        className={`p-2 w-1/2 text-white rounded-tr-md
                        ${allTimeActive ? 'bg-sky-700' : 'bg-slate-950'}`}
                    >Recent</button>
                    {renderData()}
                </div>
            </div>
        </div>
    )
}

export default Statistics;
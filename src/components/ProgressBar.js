import { useSelector } from "react-redux";


function ProgressBar() {
    const { currentIndex, data, currentTextIndex } = useSelector(state => state.checkLetter);
    const textLength = data[currentTextIndex].length;
    const progress = (currentIndex / textLength) * 100;


    return (
        <div className="mx-auto h-3 mt-4 bg-slate-200 rounded-md">

            <div
                style={{ width: `${progress}%` }}
                className="h-3 bg-slate-950 rounded-md"
            ></div>
        </div>
    )
}

export default ProgressBar;
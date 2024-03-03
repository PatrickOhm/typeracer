import { useSelector } from "react-redux";

function TextArea() {
    const { currentIndex, currentTextIndex, data, errorCount } = useSelector(state => state.checkLetter);
    const string = data[currentTextIndex];
    const correctlyTyped = string.slice(0, currentIndex);
    const falseTyped = string.slice(currentIndex, (errorCount + currentIndex));
    const remainingText = string.slice(currentIndex + errorCount);

    return (
        <div
            className="mx-auto p-12 bg-slate-200 rounded-md font-mono"
        >
            <span className="text-sky-700 underline">{correctlyTyped}</span>
            <span className="bg-red-500 text-white">{falseTyped}</span>
            {remainingText}
        </div>
    )
}

export default TextArea;



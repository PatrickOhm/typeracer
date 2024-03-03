import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleCreateTextInput, createText } from "../store";

function CreateText({ closeCreateText }) {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const textAreaValue = useSelector(state => state.checkLetter.createTextInput);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleCreateText = () => {
        dispatch(createText(textAreaValue));
        closeCreateText();
    };

    const handleInputChange = (event) => {
        dispatch(handleCreateTextInput(event.target.value))
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[900px] mx-auto p-8 bg-slate-200 rounded-md font-mono">
                <textarea
                    placeholder="Insert text here..."
                    className="
                        bg-slate-200 
                        focus:outline-none 
                        rounded-md
                        w-full
                    "
                    rows={6}
                    ref={inputRef}
                    onChange={handleInputChange}
                    value={textAreaValue}
                />
                <button
                    className="bg-slate-950 hover:bg-sky-700 text-white p-2 rounded-md w-36 float-right"
                    onClick={handleCreateText}
                >Race</button>
            </div>
        </div>
    )
}

export default CreateText;
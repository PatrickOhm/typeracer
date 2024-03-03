import { useDispatch, useSelector } from "react-redux";
import { handleInputValue } from "../store";
import { useEffect, useRef } from "react";

function InputField() {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const name = useSelector(state => state.checkLetter.inputValue);
    const { errorCount } = useSelector(state => state.checkLetter);

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleInputChange = (event) => {
        dispatch(handleInputValue(event.target.value));
    }

    return (
        <div
            className="
            font-mono
            bg-slate-200
            mx-auto
            p-4
            rounded-md
            mt-4
            text-center
            text-slate-950
            "
        >
            <input
                className={`
                    bg-slate-200 
                    focus:outline-none 
                    text-center
                    rounded-md
                    w-auto
                    ${errorCount > 0 ? 'text-red-500' : ''}
                `}
                value={name}
                onChange={handleInputChange}
                ref={inputRef}
            ></input>
        </div>
    )
}

export default InputField;
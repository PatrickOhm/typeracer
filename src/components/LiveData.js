import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimeStampStart } from "../store";

function LiveData() {
    const dispatch = useDispatch();
    const currentIndex = useSelector(state => state.checkLetter.currentIndex);
    const start = useRef(null);
    const [elapsed, setElapsed] = useState(Date.now());
    const [cpm, setCpm] = useState(0);

    useEffect(() => {
        start.current = Date.now();
        dispatch(setTimeStampStart(start.current));
        setElapsed(Date.now());
        const interval = setInterval(() => {
            setElapsed(Date.now());
        }, 100);

        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const cpm = Math.floor(currentIndex / (calculateElapsedTime() / 60));
        if (currentIndex % 5 === 0) setCpm(cpm);
        // eslint-disable-next-line
    }, [currentIndex]);

    const calculateElapsedTime = () => {
        const elapsedTime = ((elapsed - start.current) / 1000);
        return elapsedTime;
    }

    return (
        <div className="mx-auto text-slate-950 text-right font-bold">
            <div className="p-2 space-x-4">
                <span>{cpm} cpm</span>
            </div>
        </div>
    )
}

export default LiveData;
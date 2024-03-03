import { useState, useEffect } from "react";
import TypeRacer from "./TypeRacer";


function Countdown() {
    const [count, setCount] = useState(3);

    useEffect(() => {
        const countdown = setTimeout(() => {
            setCount((prevCount) => {
                return prevCount - 1;
            });
        }, 990);

        if (count === 0) {
            clearTimeout(countdown);
        }
        return () => clearTimeout(countdown);
    }, [count]);



    const renderCountdown = () => {
        return (
            <div
                className={`font-bold text-slate-950 animation-count`}
            >{count}</div>
        )
    }

    return (
        <div className="
            flex
            justify-center
            items-center
            h-screen
            w-full
        ">
            {count === 0 ? (
                <TypeRacer />
            ) : (
                renderCountdown()
            )}
        </div>
    )
}

export default Countdown;
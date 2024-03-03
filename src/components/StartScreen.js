import { useEffect, useState } from "react";

function StartScreen({ startGame }) {
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 32) {
                startGame();
            }
        };

        const interval = setInterval(() => {
            setBlink(!blink);
        }, 800);

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearInterval(interval);
        }
        // eslint-disable-next-line
    }, [blink]);


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 h-64 rounded-md flex flex-col justify-center items-center">
                <div className={`font-mono ${blink ? 'text-slate-950' : 'text-white'}`}>press space to start</div>
            </div>
        </div>
    )
}

export default StartScreen;
import TextArea from "./TextArea";
import ProgressBar from "./ProgressBar";
import InputField from "./InputField";
import LiveData from "./LiveData";

function TypeRacer() {
    return (
        <div className="w-[900px]">
            <LiveData />
            <TextArea />
            <ProgressBar />
            <InputField />
        </div>
    )
}

export default TypeRacer;
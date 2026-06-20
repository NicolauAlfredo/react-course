import { useState } from "react";
import { HiXMark, HiBars3 } from "react-icons/hi2";

import { messages } from "../data/messages";
import Button from "./Button";
import StepMessage from "./StepMessage";

export default function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) setStep((currentStep) => currentStep - 1);
    }

    function handleNext() {
        if (step < 3) setStep((currentStep) => currentStep + 1);
    }

    function handleToggle() {
        setIsOpen((currentState) => !currentState);
    }

    return (
        <div>
            <button className="close" onClick={handleToggle}>
                {isOpen ? <HiXMark /> : <HiBars3 />}
            </button>

            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <StepMessage step={step} > {messages[step - 1]}
                        <div className="buttons">
                            <Button
                                bgColor="#e7e7e7"
                                textColor="#333"
                                onCLick={() => alert(`Lean how to ${messages[step - 1]}`)}>
                                Learn How
                            </Button>
                        </div>

                    </StepMessage>

                    <div className="buttons">
                        <Button
                            textColor="#FFFFFF"
                            bgColor="#7950F2"
                            onCLick={handlePrevious}
                        >
                            <span>👈</span> Previous
                        </Button>

                        <Button
                            textColor="#FFFFFF"
                            bgColor="#7950F2"
                            onCLick={handleNext}
                        >
                            <span>👉</span> Next
                        </Button>
                    </div>
                </div >
            )
            }
        </div>
    )
}
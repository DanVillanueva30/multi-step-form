import { useLocation } from "react-router-dom";
import { Step } from "../types"

type CurrentStepProps = {
    step: Step;
}

export default function CurrentStep({step}: CurrentStepProps) {

    const location = useLocation();
    const currentLocation = location.pathname === step.href;

    return (
        <div className=" lg:flex lg:flex-row lg:items-center gap-4">
            <div className={`${currentLocation ? 'bg-pastel text-marine border-none' : 'bg-transparent text-white border border-white'} 
            flex justify-center items-center  rounded-full w-8 h-8 lg:w-9 lg:h-9`}>
                <p className="font-medium ">{step.id}</p>
            </div>
            <div className="hidden lg:block w-max">
                <p className="uppercase text-sm leading-3 text-light-blue">Step {step.id}</p>
                <p className="uppercase text-white font-bold tracking-wider">{step.description}</p>
            </div>
        </div>
    )
}

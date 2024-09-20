import { Link } from "react-router-dom";
import { useApp } from "../hooks/useApp";


export default function ConfirmView() {

    const { resetApp } = useApp();

    const handleReset = () => resetApp();
    
    return (
        <div className=" bg-white px-8 rounded-lg border lg:border-none w-11/12 lg:w-4/5 mx-auto -mt-16 lg:mt-0 flex flex-col items-center justify-center py-20 lg:py-0 lg:h-full">
            <img src="/icon-thank-you.svg" alt="Checkmark icon" className="mb-6"/>
            <p className="mb-4 text-marine text-2xl lg:text-4xl font-bold">Thank You!</p>
            <p className="text-cool-gray text-center lg:text-xl">
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </p>

            <Link 
                to={'/'} 
                onClick={handleReset}
                className="mt-8 bg-marine transition-colors hover:opacity-75 text-white font-bold text-lg py-2 px-8 rounded-lg"
            >Reset app</Link>
        </div>
    )
}

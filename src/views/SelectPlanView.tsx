import { Link } from "react-router-dom";
import SubscriptionCard from "../components/SubscriptionCard"
import { SelectedPlan, SubscriptionPlan } from "../types";
import { useApp } from "../hooks/useApp";

const plans : SubscriptionPlan[] = [
    {
        id: 'arcade',
        name: 'Arcade',
        image: '/icon-arcade.svg',
        price: {monthly: 9, annual: 90}
    },
    {
        id: 'advanced',
        name:'Advanced',
        image: '/icon-advanced.svg',
        price: {monthly: 12, annual: 120}
    },
    {
        id: 'pro',
        name: 'Pro',
        image: '/icon-pro.svg',
        price: {monthly: 15, annual: 150}
    }
]

export default function SelectPlanView() {
    const { selectedPlan, setSelectedPlan, isAnnual, setIsAnnual } = useApp();


    const handleSelect = (plan: SelectedPlan) => {
        setSelectedPlan({
            ...selectedPlan,
            id: plan.id,
            name: plan.name,
            price: plan.price
        })
    }
    return (
        <form className=" flex flex-col justify-between gap-8 h-full">
            <div className=" bg-white py-8 px-6 rounded-lg border lg:border-none w-11/12 lg:w-4/5 mx-auto -mt-16 lg:mt-0">
                <h2 className="text-marine font-bold text-xl lg:text-4xl">Select your plan</h2>
                <p className="text-cool-gray my-4 lg:text-lg">You have the option of monthly or yearly billing.</p>

                <section className="space-y-3 lg:space-y-0 lg:flex lg:justify-between lg:gap-4 w-full">
                    {plans.map(plan => (
                        <SubscriptionCard 
                            key={plan.id}
                            plan={plan}
                            isSelected={selectedPlan.id === plan.id}
                            onSelect={() => handleSelect(plan) }
                            annual={isAnnual}
                        />
   
                    ))}
                </section>{/* Plans container*/}

                <section className="flex justify-center items-center gap-4 mt-4 bg-magnolia py-3 rounded-md">
                    <p className="text-marine font-medium">Monthly</p>
                    <div>
                        <label className=" mb-5 cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={isAnnual} 
                                className="sr-only peer" 
                                onChange={() => setIsAnnual(!isAnnual)}
                            />
                            <div className="relative w-9 h-5 bg-marine peer-focus:outline-none peer-focus:ring-transparent  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-marine"></div>
                        </label>
                    </div>
                    <p className="text-cool-gray font-medium">Yearly</p>
                </section>{/*toggle*/}
            </div>

            <nav className="py-6 lg:pr-8 bg-white w-full">
                <div className="w-11/12 lg:w-4/5 mx-auto flex justify-between">
                    <Link
                        to={'/'}
                        className=" text-cool-gray py-3 px-4 font-medium"
                    >Go Back</Link>
                    <Link
                        to={'/add-ons'}
                        className="bg-marine text-white py-3 transition-colors px-6 rounded-lg font-medium"
                    >Next Step</Link>
                </div>
            </nav>
        </form>
    )
}

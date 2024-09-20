import { Link } from "react-router-dom";
import { useApp } from "../hooks/useApp";
import { useMemo } from "react";


export default function SummaryView() {

    const { selectedPlan, isAnnual, selectedAddOns } = useApp();

    
    const total = useMemo(() => {
        const planPrice = isAnnual ? selectedPlan.price.annual : selectedPlan.price.monthly;
        const addOnsTotal = selectedAddOns.reduce((acc, addOn) => {
            const addOnPrice = isAnnual ? addOn.price * 10 : addOn.price;
            return acc + addOnPrice;
        }, 0);
        return planPrice + addOnsTotal;
    }, [selectedPlan, isAnnual, selectedAddOns]);

    return (
        <div className="flex flex-col justify-between gap-8 h-full">
            <section className=" bg-white py-8 px-6 rounded-lg border lg:border-none w-11/12 lg:w-4/5 mx-auto -mt-16 lg:mt-0">
                <h2 className="text-marine font-bold text-xl lg:text-4xl">Finishing up</h2>
                <p className="text-cool-gray my-4 lg:text-lg">Double-check everything looks OK before confirming.</p>

                <div className="bg-alabaster rounded-lg p-4 lg:p-8 space-y-4 lg:space-y-6">
                    <div className="flex items-center justify-between border-b border-cool-gray">
                        <div>
                            <p className="text-marine font-medium lg:text-lg">{selectedPlan.name}({isAnnual ? 'Yearly' : 'Monthly'})</p>
                            <Link to={'/select-plan'} className="text-cool-gray text-sm inline-block underline underline-offset-2 mb-4 lg:mb-6 hover:text-purplish hover:opacity-75 transition-colors">Change</Link>
                        </div>
                        <p className="text-marine font-bold lg:text-xl">{isAnnual ? `${selectedPlan.price.annual}/yr` : `${selectedPlan.price.monthly}/mo`}</p>
                    </div>

                    {selectedAddOns && (
                        selectedAddOns.map(addOn => (
                            <div className="flex items-center justify-between" key={addOn.name}>
                                <p className="text-cool-gray">{addOn.name}</p>
                                <p className="text-marine lg:font-medium lg:text-lg">+${isAnnual ? `${(addOn.price * 10 )}/yr` : `${addOn.price}/mo`}</p>
                            </div>
                        ))
                    )}
                </div>{/*Summary container */}


                <div className="flex justify-between items-center pt-8 px-4 lg:px-8">
                    <p className="text-cool-gray">Total (per {isAnnual ? 'year': 'month'})</p>
                    <p className="text-purplish font-bold text-lg lg:text-2xl">+{total}/{isAnnual ? 'yr' : 'mo'}</p>
                </div>
            </section>

            <div className="py-6 lg:pr-8 bg-white w-full">
                <div className="w-11/12 lg:w-4/5 mx-auto flex justify-between">
                    <Link
                        to={'/add-ons'}
                        className=" text-cool-gray py-3 px-4 font-medium"
                    >Go Back</Link>
                    <Link
                        to={'/confirm'}
                        className="bg-purplish font-medium text-white py-3 transition-colors px-8 rounded-lg hover:bg-purplish hover:opacity-75"
                    >Confirm</Link>
                </div>
            </div>
        </div>
    )
}

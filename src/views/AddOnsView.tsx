import { Link } from "react-router-dom"
import AddOnCard from "../components/AddOnCard"
import { AddOn } from "../types"


const addOns : AddOn[] = [
    {
        name: 'Online Service',
        id: 'online-service',
        description: 'Access to multiplayer games',
        price: 1
    },
    {
        name: 'Larger storage',
        id: 'large-storage',
        description: 'Extra 1TB of cloud save',
        price: 2
    },
    {
        name: 'Customizable Profile',
        id: 'custom-profile',
        description: 'Custom theme on your profile',
        price: 2
    }
]

export default function AddOnsView() {


    return (
        <form className=" flex flex-col justify-between gap-8 h-full">
            <div className=" bg-white py-8 px-6 rounded-lg border lg:border-none w-11/12 lg:w-4/5 mx-auto -mt-16 lg:mt-0">
                <h2 className="text-marine font-bold text-xl lg:text-4xl">Pick add-ons</h2>
                <p className="text-cool-gray my-4 lg:text-lg">Add-ons help enhance your gaming experience.</p>

                <section className="space-y-4 lg:space-y-5">
                    {addOns.map(addOn => (
                        <AddOnCard key={addOn.name} addOn={addOn}/>
                    ))}
                </section>{/*Add-Ons container */}
            </div>

            <nav className="py-6 lg:pr-8 bg-white w-full">
                <div className="w-11/12 lg:w-4/5 mx-auto flex justify-between">
                    <Link
                        to={'/select-plan'}
                        className=" text-cool-gray py-3 px-4 font-medium"
                    >Go Back</Link>
                    <Link
                        to={'/summary'}
                        className="bg-marine text-white py-3 transition-colors px-6 rounded-lg font-medium"
                    >Next Step</Link>

                </div>
            </nav>
        </form>
    )
}

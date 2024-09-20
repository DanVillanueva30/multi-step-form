
import { useApp } from "../hooks/useApp";
import { AddOn, SelectedAddOn } from "../types"

type AddOnCardProps = {
    addOn: AddOn;
}

export default function AddOnCard({addOn}: AddOnCardProps) {
    const { selectedAddOns, setSelectedAddOns, isAnnual } = useApp();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;

        setSelectedAddOns((prevSelectedAddOns: SelectedAddOn[]) => {
            if (checked) {
                return [...prevSelectedAddOns, { name: addOn.name, price: addOn.price }];
            } else {
                return prevSelectedAddOns.filter(
                    (selectedAddOn) => selectedAddOn.name !== addOn.name
                );
            }
        });
    };

    const isChecked = selectedAddOns.some(
        (selectedAddOn) => selectedAddOn.name === addOn.name
    );

    return (
        <div className="flex justify-center items-center w-full pl-[7px]">
            <input 
                type="checkbox" 
                name={addOn.id} 
                id={addOn.id} 
                checked={isChecked}
                className="peer w-4 h-4 checked:accent-purplish pl-5 -mr-8 "
                onChange={handleChange}
            />
            <label htmlFor={addOn.id} className="flex justify-between items-center border border-cool-gray p-4 px-5 rounded-lg hover:cursor-pointer peer-checked:border-purplish w-full">
                <div className="pl-6">
                    <p className="text-marine font-medium">{addOn.name}</p>
                    <p className="text-sm text-cool-gray">{addOn.description}</p>
                </div>
                <p className="text-purplish text-sm md:text-base">+${isAnnual ? `${addOn.price * 10}/yr` : `${addOn.price}/mo`}</p>
            </label>
        </div>
    )
}

import { SubscriptionPlan } from "../types"


type SubscriptionCardProps = {
    plan: SubscriptionPlan;
    isSelected: boolean;
    onSelect: () => void;
    annual: boolean;
}
export default function SubscriptionCard({plan, isSelected, onSelect, annual}: SubscriptionCardProps) {

    return (
        <div 
            className={` ${isSelected ? 'border-purplish bg-magnolia' : 'border-cool-gray bg-white'} w-full border  hover:cursor-pointer hover:border-purplish rounded-md p-4 lg:py-7 lg:px-5 flex lg:flex-col gap-4 lg:gap-12`}
            onClick={onSelect}
        >
            <img className="lg:h-12 lg:w-12" src={plan.image} alt="Plan Icon"/>
            <div>
                <p className="text-marine font-medium">{plan.name}</p>
                <p className="text-cool-gray text-sm">{annual ? `$${plan.price.annual}/yr` : `$${plan.price.monthly}/mo`}</p>
                {annual && <p className="text-marine">2 months free</p>}
            </div>
        </div>
    )
}


export type Step = {
    id: number;
    description: string;
    href: string; 
}

export type SubscriptionPlan = {
    id: string;
    name: string;
    image: string;
    price: {
        monthly: number,
        annual: number
    }
}
export type SelectedPlan = Pick<SubscriptionPlan,'id' | 'name' | 'price'>

export type AddOn = {
    name: string;
    id: string;
    description: string;
    price: number;
}

export type SelectedAddOn = Pick<AddOn, 'name' | 'price'>;
export type SelectedAddOns = SelectedAddOn[];

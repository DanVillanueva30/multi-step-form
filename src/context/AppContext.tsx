import { ReactNode, createContext, useState, SetStateAction } from "react";
import { SelectedAddOns, SelectedPlan } from "../types";

type AppProviderProps = { children: ReactNode }

type AppContextType = {
    selectedPlan: SelectedPlan;
    setSelectedPlan: (plan: SelectedPlan) => void;
    isAnnual: boolean;
    setIsAnnual: (isAnnual: boolean) => void;
    selectedAddOns: SelectedAddOns;
    setSelectedAddOns: React.Dispatch<SetStateAction<SelectedAddOns>>;
    resetApp: () => void;
}
const initialPlan = {
    id: 'arcade',
    name: 'Arcade',
    price: {
        monthly: 9,
        annual: 90
    }
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({children}: AppProviderProps) => {
    const [ selectedPlan, setSelectedPlan ] = useState<SelectedPlan>(initialPlan);
    const [ isAnnual, setIsAnnual ] = useState(false);
    const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOns>([]);
    const resetApp = () => {
        setSelectedPlan(initialPlan);
        setIsAnnual(false);
        setSelectedAddOns([]);
    }

    return(
        <AppContext.Provider value={{ selectedPlan, setSelectedPlan, isAnnual, setIsAnnual, selectedAddOns, setSelectedAddOns, resetApp }}>
            {children}
        </AppContext.Provider>
    )
}
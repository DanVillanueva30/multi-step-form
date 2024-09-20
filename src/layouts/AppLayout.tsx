import { Outlet } from "react-router-dom";
import CurrentStep from "../components/CurrentStep";
import { Step } from "../types";

const steps: Step[] = [
    {
        id: 1,
        description: 'Your info',
        href: '/'
    },
    {
        id: 2,
        description: 'Select plan',
        href: '/select-plan'
    },
    {
        id: 3,
        description: 'Add-ons',
        href: '/add-ons'
    },
    {
        id: 4,
        description: 'Summary',
        href: '/summary'
    },
]

export default function AppLayout() {
    return (
        <>
            <main className="grid grid-rows-5 lg:grid-rows-1 lg:grid-cols-5 lg:p-4 max-w-screen-2xl mx-auto">
                <aside
                    className="bg-[url('/bg-sidebar-mobile.svg')] bg-center bg-no-repeat bg-cover lg:bg-[url('/bg-sidebar-desktop.svg')]  
                    lg:bg-bottom lg:rounded-lg p-8 lg:h-screen "
                >
                    <section className="flex lg:flex-col justify-center gap-5 lg:gap-8 pb-20 w-full">
                        {steps.map(step => (
                            <CurrentStep key={step.id} step={step}/>
                        ))}
                    </section>
                    
                </aside>



                <section 
                    className="bg-magnolia lg:bg-white row-start-2 row-end-5 lg:row-span-1 lg:col-start-2 lg:col-end-6"
                >
                    <Outlet />
                </section>
            </main>
        </>
    )
}

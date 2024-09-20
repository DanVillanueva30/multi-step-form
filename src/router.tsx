import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import YourInfoView from "./views/YourInfoView"
import SelectPlanView from "./views/SelectPlanView"
import AddOnsView from "./views/AddOnsView"
import SummaryView from "./views/SummaryView"
import ConfirmView from "./views/ConfirmView"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/"  element={<YourInfoView />} index/>
                    <Route path="/select-plan" element={<SelectPlanView />}/>
                    <Route path="/add-ons" element={<AddOnsView />}/>
                    <Route path="/summary" element={<SummaryView />}/>
                    <Route path="/confirm" element={<ConfirmView />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

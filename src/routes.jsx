import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Landing /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
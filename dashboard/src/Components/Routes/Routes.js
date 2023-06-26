import {Routes, Route} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Orders from "../../Pages/Orders";
import Inventory from "../../Pages/Inventory";
import Customers from "../../Pages/Customers";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/Inventory" element={<Inventory/>}></Route>
                <Route path="/Orders" element={<Orders/>}></Route>
                <Route path="/Customers" element={<Customers/>}></Route>            
            </Routes>
    );
}

export default AppRoutes;
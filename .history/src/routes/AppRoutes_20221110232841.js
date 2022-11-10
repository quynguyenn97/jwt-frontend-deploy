import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Users from "../components/ManageUsers/Users";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = (props) => {
    return (
        <div>
            <Routes>
                <Route
                    path="/users"
                    element={
                        <PrivateRoutes>
                            <Users />
                        </PrivateRoutes>
                    }
                />
                <Route path="/" element={"home"}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*" element={"not found"}></Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;

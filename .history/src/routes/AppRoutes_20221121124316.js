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
import Role from "../components/Role/Role";

const AppRoutes = (props) => {
    const Project = () => {
        return <span>projects</span>;
    };
    return (
        <>
            <Routes>
                <Route
                    path="/users"
                    element={
                        <PrivateRoutes>
                            <Users />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/roles"
                    element={
                        <PrivateRoutes>
                            <Role />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <PrivateRoutes>
                            <Project />
                        </PrivateRoutes>
                    }
                />
                <Route path="/" element={"home"}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*" element={"not found"}></Route>
            </Routes>
        </>
    );
};

export default AppRoutes;

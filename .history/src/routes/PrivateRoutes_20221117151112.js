import { useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoutes = (props) => {
    const { user } = useContext(UserContext);
    if (user && user.isAuthenticated === true) {
        return <>{props.children}</>;
    } else {
        return <Navigate to="/login"></Navigate>;
    }
};

export default PrivateRoutes;

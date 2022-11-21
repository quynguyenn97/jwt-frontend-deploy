import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoutes = (props) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (user && user.isAuthenticated === true) {
        return <>{props.children}</>;
    } else {
        return <Redirect to="/login"></Redirect>;
    }
};

export default PrivateRoutes;

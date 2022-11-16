import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const PrivateRoutes = (props) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (!session) {
            navigate("/login");
            window.location.reload();
        }
    }, []);
    return <div>{props.children}</div>;
};

export default PrivateRoutes;

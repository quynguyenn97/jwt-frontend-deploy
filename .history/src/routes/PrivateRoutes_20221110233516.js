import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (!session) {
            navigate("/login");
        }
    }, []);
    return <div>{props.children}</div>;
};

export default PrivateRoutes;

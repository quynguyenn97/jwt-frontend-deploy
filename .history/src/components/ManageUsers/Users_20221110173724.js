import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Users = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (!session) {
            navigate("/login");
        }
    }, []);
    return <div>user heelo</div>;
};

export default Users;

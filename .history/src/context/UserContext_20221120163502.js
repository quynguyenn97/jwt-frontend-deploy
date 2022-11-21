import React, { useEffect, useState } from "react";
import { getUserAccount } from "../services/userService";
// import { useLocation } from "react-router-dom";
const UserContext = React.createContext({ name: "", auth: false });
const UserProvider = ({ children }) => {
    // const location = useLocation();
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({
        isLoading: false,
        isAuthenticated: false,
        token: "",
        account: {},
    });

    // Login updates the user data with a name parameter
    const loginContext = (userData) => {
        setUser({ ...userData, isLoading: false });
    };

    // Logout updates the user data to default
    const logout = () => {
        setUser((user) => ({
            name: "",
            auth: false,
        }));
    };

    const fetchUser = async () => {
        let response = await getUserAccount();
        if (response && response.EC === 0) {
            let groupWithRoles = response.DT.groupWithRoles;
            let email = response.DT.email;
            let username = response.DT.username;
            let token = response.DT.access_token;
            let data = {
                isAuthenticated: true,
                token: token,
                account: { groupWithRoles, email, username },
                isLoading: false,
            };
            setUser(data);
        }
    };
    useEffect(() => {
        // if (location && location.path !== "/") {
        // if (window.location.pathname !== "/") {
        fetchUser();
        // }
        // }
    }, []);
    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };

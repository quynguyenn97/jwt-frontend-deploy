import "./App.scss";
import Nav from "./components/Nav/Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import _ from "lodash";
import AppRoutes from "./routes/AppRoutes";
import { UserContext } from "../context/UserContext";

import { Audio } from "react-loader-spinner";

const App = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <BrowserRouter>
                <div className="app-header">
                    <Nav />
                </div>
                <div className="app-container">
                    <AppRoutes />
                </div>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;

import "./App.scss";
import Nav from "./components/Nav/Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/ManageUsers/Users";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="app-container">
                    {/* <Nav /> */}
                    <Routes>
                        <Route path="/" element={"home"}>
                            home
                        </Route>
                        <Route path="/users" element={<Users />}></Route>
                        <Route path="/news" element={"news"}></Route>
                        <Route path="/about" element={"about"}></Route>
                        <Route path="/contact" element={"contact"}></Route>
                        <Route path="*" element={"not found"}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>
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

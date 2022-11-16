import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";

const Login = (props) => {
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    };
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);
    const navigate = useNavigate();
    const handleCreateNewAccount = () => {
        navigate("/register");
    };
    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);
        if (!valueLogin) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValueLogin: false,
            });
            toast.error("Pleaee enter your email address or phone number");
            return;
        }
        if (!password) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidPassword: false,
            });
            toast.error("Pleaee enter your password");
            return;
        }
        let response = await loginUser(valueLogin, password);
        if (response && +response.EC === 0) {
            //success
            let groupWithRoles = response.EC.groupWithRoles;
            let email = response.EC.email;
            let usernam = response.EC.username;
            let data = {
                isAuthenticated: true,
                token: "fake token",
                account: { ...response.EC.groupWithRoles, ...res },
            };
            sessionStorage.setItem("account", JSON.stringify(data));
            navigate("/users");
            window.location.reload();
        }
        if (response && +response.EC !== 0) {
            //error
            toast.error(response.EM);
        }
    };
    const handlePressEnter = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (session) {
            navigate("/");
            window.location.reload();
        }
    }, []);
    return (
        <div className="login-container ">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left  col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">Facebook</div>
                        <div className="detail">
                            Facebook helps you connect and share with the people
                            in your life.
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className="brand d-sm-none">Facebook</div>

                        <input
                            type="text"
                            className={
                                objValidInput.valueLogin === false
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            placeholder="Email address or phone number"
                            value={valueLogin}
                            onChange={(event) =>
                                setValueLogin(event.target.value)
                            }
                        />
                        <input
                            type="text"
                            className={
                                objValidInput.password === false
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            placeholder="Password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            onKeyDown={(event) => handlePressEnter(event)}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={() => handleLogin()}>
                            Login
                        </button>
                        <span className="text-center">
                            <a className="forgot-password" href="s">
                                Forgot your password
                            </a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={() => handleCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

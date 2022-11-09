import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleCreateNewAccount = () => {
        navigate("/register");
    };
    const handleLogin = () => {
        if (!valueLogin) {
            toast.error("Pleaee enter your email address or phone number");
            return;
        }
        if (!password) {
            toast.error("Pleaee enter your password");
        }
        alert("me");
    };
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
                            className="form-control"
                            placeholder="Email address or phone number"
                            value={valueLogin}
                            onChange={(event) =>
                                setValueLogin(event.target.value)
                            }
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
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

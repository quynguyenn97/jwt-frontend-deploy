import React from "react";
import "./Login.scss";

const Login = (props) => {
    return (
        <div className="login-container ">
            <div className="container">
                <div className="row">
                    <div className="content-left  col-12 d-none col-xs-7 d-xs-block">
                        <div className="brand">Facebook</div>
                        <div className="detail">
                            Facebook helps you connect and share with the people
                            in your life.
                        </div>
                    </div>
                    <div className="content-right col-5 d-flex flex-column gap-3 py-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email address or phone number"
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                        />
                        <button className="btn btn-primary">Login</button>
                        <span className="text-center">
                            <a className="forgot-password" href="s">
                                Forgot your password
                            </a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success">
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

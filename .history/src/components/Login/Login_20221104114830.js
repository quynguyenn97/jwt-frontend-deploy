import React from "react";
import "./Login.scss";

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="content-left red col-7">
                        <div className="brand">Facebook</div>
                        <div className="detail">
                            Facebook helps you connect and share with the people
                            in your life.
                        </div>
                    </div>
                    <div className="content-right green col-5">right</div>
                </div>
            </div>
        </div>
    );
};

export default Login;

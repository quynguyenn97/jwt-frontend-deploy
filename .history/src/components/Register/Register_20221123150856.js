import React, { useContext, useEffect, useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerNewUser } from "../../services/userService";
import { UserContext } from "../../context/UserContext";

const Register = (props) => {
    const { user, loginContext } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    };
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    useEffect(() => {
        if (user && user.isAuthenticated) {
            navigate("/");
        }
    }, []);

    const isValidInputs = () => {
        setObjCheckInput(defaultValidInput);
        if (!email) {
            toast.error("Email is required");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        let regx = /\S+@\S+\.\S+/;
        if (!regx.test(email)) {
            toast.error("Please enter a valid email address");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        if (!phone) {
            toast.error("Phone is required");
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
            return false;
        }
        if (!username) {
            toast.error("Username is required");
            return false;
        }
        if (!password) {
            toast.error("Password is required");
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
            return false;
        }
        if (password != confirmPassword) {
            toast.error("Password is not the same");
            setObjCheckInput({
                ...defaultValidInput,
                isValidConfirmPassword: false,
            });
            return false;
        }

        return true;
    };

    const handleRegister = async () => {
        let check = isValidInputs();
        if (check === true) {
            let serverData = await registerNewUser(
                email,
                phone,
                username,
                password
            );
            if (+serverData.EC === 0) {
                toast.success(serverData.EM);
            } else {
                toast.error(serverData.EM);
            }
            navigate("/login");
        }
    };
    return (
        <div className="register-container ">
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
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                className={
                                    objCheckInput.isValidEmail
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Email address or phone number"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone number:</label>
                            <input
                                type="text"
                                className={
                                    objCheckInput.isValidPhone
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Phone number"
                                value={phone}
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="text"
                                className={
                                    objCheckInput.isValidPassword
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Re-enter Password:</label>
                            <input
                                type="text"
                                className={
                                    objCheckInput.isValidConfirmPassword
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Re-enter Password"
                                value={confirmPassword}
                                onChange={(event) =>
                                    setConfirmPassword(event.target.value)
                                }
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleRegister()}>
                            Register
                        </button>

                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={() => handleLogin()}>
                                Already've an account
                            </button>
                        </div>
                        <div className="mt-3 return">
                            <Link to="/">
                                <i className="fa fa-arrow-circle-left"></i>
                                <span title="Return to HomePage">
                                    Return to HomePage
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

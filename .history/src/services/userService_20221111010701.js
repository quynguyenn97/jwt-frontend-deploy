import axios from "axios";

const registerNewUser = (email, phone, username, password) => {
    return axios.post("http://localhost:8080/api/v1/register", {
        email,
        phone,
        username,
        password,
    });
};
const loginUser = (valueLogin, password) => {
    return axios.post("http://localhost:8080/api/v1/login", {
        valueLogin,
        password,
    });
};

const fetchAllUsers = () => {
    return axios.post("http://localhost:8080/api/v1/login"
}

export {
    registerNewUser, loginUser,
    fetchAllUsers};

import axios from "axios";

const createRoles = (roles) => {
    return axios.post("/api/v1/register", [...roles]);
};
export { createRoles };

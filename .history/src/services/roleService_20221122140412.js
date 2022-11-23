import axios from "axios";

const createRoles = (roles) => {
    return axios.post("/api/v1/role/create", [...roles]);
};
const fetchAllRoles = () => {
    return axios.post(`/api/v1/role/read`);
};
export { createRoles, fetchAllRoles };

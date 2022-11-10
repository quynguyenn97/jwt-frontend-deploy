import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Users.scss";
import { fetchAllUsers } from "../../services/userService";

const Users = (props) => {
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        let response = await fetchAllUsers();
        if (response && response.data && +response.data.EC === 0) {
            setListUsers(response.data.DT);
        }
    };
    console.log(listUsers);
    return (
        <>
            <div className="manage-users-container">
                <div className="user-header">
                    <div className="title">
                        <h3>Table Users</h3>
                    </div>
                    <div className="actions">
                        <button className="btn btn-success">Refesh</button>
                        <button className="btn btn-primary">
                            Add new user
                        </button>
                    </div>
                </div>
            </div>
            <div className="user-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">No</th>

                            <th scope="col">Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 ? (
                            <></>
                        ) : (
                            <>
                                <span>Not Found</span>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;

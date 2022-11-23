import { useEffect, useState } from "react";
import "./GroupRole.scss";
import { fetchGroup } from "../../services/userService";
import { toast } from "react-toastify";
import { fetchAllRole, fetchRolesByGroup } from "../../services/roleService";

const GroupRole = () => {
    const [userGroups, setUserGroups] = useState([]);
    const [selectGroup, setSelectGroup] = useState("");
    const [listRoles, setListRoles] = useState([]);
    useEffect(() => {
        getGroups();
        getAllRoles();
        getRolesByGroup();
    }, []);
    const getGroups = async () => {
        let res = await fetchGroup();
        if (res && res.EC === 0) {
            setUserGroups(res.DT.DT);
        } else {
            toast.error(res.EM);
        }
    };
    const getAllRoles = async () => {
        let data = await fetchAllRole();
        if (data && data.EC === 0) {
            console.log("check data role", data);
            setListRoles(data.DT);
        }
    };

    const getRolesByGroup = async (groupId) => {
        let data = await fetchRolesByGroup(groupId);
        if (data && data.EC === 0) {
            console.log("check data role", data);
            // setListRoles(data.DT);
        }
    };

    const handleOnchangeGroup = async (value) => {
        if (value) {
            await getRolesByGroup(value);
        }
    };
    return (
        <div className="group-role-container">
            <div className="container">
                <div className="container mt-3">
                    <h4>Group Role:</h4>
                    <div className="assign-group-role">
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Select Group: (<span className="red">*</span>):
                            </label>
                            <select
                                className="form-select"
                                onChange={(event) =>
                                    handleOnchangeGroup(event.target.value)
                                }>
                                <option value="">
                                    Please select your group
                                </option>
                                {userGroups.length > 0 &&
                                    userGroups.map((item, index) => {
                                        return (
                                            <option
                                                key={`group-${index}`}
                                                value={item.id}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <hr />
                        <div className="roles">
                            <h5>Assign Roles:</h5>
                            {listRoles &&
                                listRoles.length > 0 &&
                                listRoles.map((item, index) => {
                                    return (
                                        <div
                                            class="form-check"
                                            key={`list-role-${index}`}>
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id={`list-role-${index}`}
                                            />
                                            <label
                                                class="form-check-label"
                                                for={`list-role-${index}`}>
                                                {item.url}
                                            </label>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupRole;

import { useEffect, useState } from "react";
import "./GroupRole.scss";
import { fetchGroup } from "../../services/userService";
import { toast } from "react-toastify";
import { fetchAllRole, fetchRolesByGroup } from "../../services/roleService";

const GroupRole = () => {
    const [userGroups, setUserGroups] = useState([]);
    const [selectGroup, setSelectGroup] = useState("");
    const [listRoles, setListRoles] = useState([]);
    const [assignRolesByGroup, setAssignRolesByGroup] = useState([]);
    useEffect(() => {
        getGroups();
        getAllRoles();
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

    const handleOnchangeGroup = async (value) => {
        setSelectGroup(value);
        if (value) {
            let data = await fetchRolesByGroup(value);
            if (data && data.EC === 0) {
                console.log("check data role", data);
                // setListRoles(data.DT);
            }
        }
    };

    const buildDataRolesByGroup = (groupRoles, allRoles) => {
        let result = [];
        if (allRoles && allRoles.length > 0) {
            allRoles.map((role) => {
                let object = {};
                object.url = role.url;
                object.id = role.id;
                object.description = role.description;
                object.isAssigned = false;
                if (groupRoles && groupRoles.length > 0) {
                    object.isAssigned = groupRoles.some(
                        (item) => item.url === object.url
                    );
                }
                result.push(object);
            });
        }
        return result;
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
                        {selectGroup && (
                            <div className="roles">
                                <h5>Assign Roles:</h5>
                                {assignRolesByGroup &&
                                    assignRolesByGroup.length > 0 &&
                                    assignRolesByGroup.map((item, index) => {
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupRole;

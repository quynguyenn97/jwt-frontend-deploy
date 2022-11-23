import React, { useState } from "react";
import { fetchAllRole, deleteRole } from "../../services/roleService";
const TableRole = (props) => {
    const [listRoles, setListRoles] = useState([]);
    const handleDeleteRole = (role) => {};
    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">URL</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {listRoles && listRoles.length > 0 ? (
                        <>
                            {listRoles.map((item, index) => {
                                return (
                                    <tr key={`row-${index}`}>
                                        <td>
                                            {(currentPage - 1) * currentLimit +
                                                index +
                                                1}
                                        </td>
                                        <td>{item.id}</td>
                                        <td>{item.url}</td>
                                        <td>{item.description}</td>

                                        <td>
                                            <span
                                                title="Delete"
                                                className="delete"
                                                onClick={() =>
                                                    handleDeleteRole(item)
                                                }>
                                                <i className="fa fa-trash-o"></i>
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            <tr>
                                <td colSpan={4}>Not Found Roles</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TableRole;

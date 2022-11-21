import React from "react";

const TableRole = (props) => {
    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>

                        <th scope="col">Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Group</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 ? (
                        <>
                            {listUsers.map((item, index) => {
                                return (
                                    <tr key={`row-${index}`}>
                                        <td>
                                            {(currentPage - 1) * currentLimit +
                                                index +
                                                1}
                                        </td>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                        <td>
                                            {item.Group ? item.Group.name : ""}
                                        </td>
                                        <td>
                                            <span
                                                title="Edit"
                                                className="edit"
                                                onClick={() =>
                                                    handleEditUser(item)
                                                }>
                                                <i className="fa fa-pencil"></i>
                                            </span>
                                            <span
                                                title="Delete"
                                                className="delete"
                                                onClick={() =>
                                                    handleDeleteUser(item)
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
                                <td>Not Found users</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TableRole;

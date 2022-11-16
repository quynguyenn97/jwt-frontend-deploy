import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Users.scss";
import { fetchAllUsers, deleteUser } from "../../services/userService";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import ModalDelete from "./ModalDelete";
import ModalUser from "./ModalUser";

const Users = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(0);
    // delete modal
    const [isShowModelDelete, setIsShowModelDelete] = useState(false);
    const [dataModal, setDataModal] = useState({});
    // modal create/update
    const [isShowModalUser, setIsShowModalUser] = useState(false);
    const [actionModalUser, setActionModalUser] = useState("CREATE");
    const [dataModalUser, setDataModalUser] = useState({});
    useEffect(() => {
        fetchUsers();
    }, [currentPage]);
    const fetchUsers = async () => {
        let response = await fetchAllUsers(currentPage, currentLimit);
        if (response && response.data && +response.data.EC === 0) {
            setListUsers(response.data.DT.users);
            setTotalPages(response.data.DT.totalPages);
        }
    };
    const handlePageClick = async (event) => {
        setCurrentPage(+event.selected + 1);
    };
    const handleDeleteUser = (user) => {
        setIsShowModelDelete(true);
        setDataModal(user);
    };
    const handleClose = () => {
        setIsShowModelDelete(false);
        setDataModal({});
    };

    const confirmDeleteUser = async () => {
        let response = await deleteUser(dataModal);
        if (response && response.data.EC === 0) {
            fetchUsers();
            toast.success(response.data.EM);
            setIsShowModelDelete(false);
        } else {
            toast.error(response.data.EM);
        }
    };
    const onHideModalUser = async () => {
        setIsShowModalUser(false);
        setDataModalUser({});
        await fetchUsers();
    };
    const handleEditUser = (user) => {
        setActionModalUser("UPDATE");
        setDataModalUser(user);
        setIsShowModalUser(true);
    };
    return (
        <>
            <div className="container">
                <div className="manage-users-container">
                    <div className="user-header">
                        <div className="title">
                            <h3>Table Users</h3>
                        </div>
                        <div className="actions my-3">
                            <button className="btn btn-success refresh">
                                <i className="fa fa-refresh"></i> Refesh
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setIsShowModalUser(true);
                                    setActionModalUser("CREATE");
                                }}>
                                <i className="fa fa-plus-circle"></i>
                                Add new user
                            </button>
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
                                                        {(currentPage - 1) *
                                                            currentLimit +
                                                            index +
                                                            1}
                                                    </td>
                                                    <td>{item.id}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.username}</td>
                                                    <td>
                                                        {item.Group
                                                            ? item.Group.name
                                                            : ""}
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-warning mx-2"
                                                            onClick={() =>
                                                                handleEditUser(
                                                                    item
                                                                )
                                                            }>
                                                            Edit
                                                        </button>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() =>
                                                                handleDeleteUser(
                                                                    item
                                                                )
                                                            }>
                                                            Delete
                                                        </button>
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
                    </div>
                    {totalPages > 0 && (
                        <div className="user-footer">
                            <ReactPaginate
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={totalPages}
                                previousLabel="< previous"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    )}
                </div>
            </div>
            <ModalDelete
                confirmDeleteUser={confirmDeleteUser}
                show={isShowModelDelete}
                handleClose={handleClose}
                dataModal={dataModal}
            />
            <ModalUser
                show={isShowModalUser}
                onHide={onHideModalUser}
                dataModal={dataModal}
                action={actionModalUser}
                dataModalUser={dataModalUser}
            />
        </>
    );
};

export default Users;

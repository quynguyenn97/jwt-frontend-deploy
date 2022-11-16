import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchGroup, createNewUser } from "../../services/userService";
import { toast } from "react-toastify";
import _ from "lodash";
const ModalUser = (props) => {
    const defaultUserData = {
        email: "",
        phone: "",
        username: "",
        password: "",
        address: "",
        sex: "",
        group: "",
    };
    const [userData, setUserData] = useState(defaultUserData);
    const [userGroups, setUserGroups] = useState([]);
    const { show, handleClose, dataModal } = props;
    useEffect(() => {
        getGroups();
    }, []);
    const getGroups = async () => {
        let res = await fetchGroup();
        if (res && res.data && res.data.EC === 0) {
            setUserGroups(res.data.DT.DT);
            if (res.data.DT.DT && res.data.DT.DT.length > 0) {
                let groups = res.data.DT.DT;
                setUserData({ ...userData, group: groups[0].id });
            }
        } else {
            toast.error(res.data.EM);
        }
    };
    const handleOnChangeInput = (value, name) => {
        let _userData = _.cloneDeep(userData);
        _userData[name] = value;
        setUserData(_userData);
    };
    const validInputDefault = {
        email: true,
        phone: true,
        username: true,
        password: true,
        address: true,
        sex: true,
        group: true,
    };
    const [validInputs, setValidInputs] = useState(validInputDefault);
    const checkValidInputs = () => {
        setValidInputs(validInputDefault);
        let arr = ["email", "phone", "username", "password", "group"];
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (!userData[arr[i]]) {
                let _validInputs = _.cloneDeep(validInputDefault);
                _validInputs[arr[i]] = false;
                setValidInputs(_validInputs);
                toast.error(`Empty input ${arr[i]}`);
                check = false;
                break;
            }
        }
        return check;
    };
    const handleConfirmUser = async () => {
        let check = checkValidInputs();
        if (check === true) {
            let res = await createNewUser({
                ...userData,
                groupId: userData[`group`],
            });
            console.log("check res", res);
            if (res.data && res.data.EC === 0) {
            } else {
                toast.error(`Errorr create user..`);
            }
        }
    };
    return (
        <div>
            <Modal size="lg" show={true} className="modal-user">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span>{props.title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-body row">
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Email address (<span className="red">*</span>):
                            </label>
                            <input
                                className={
                                    validInputs.email
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                type="email"
                                value={userData.email}
                                onChange={(event) =>
                                    handleOnChangeInput(
                                        event.target.value,
                                        "email"
                                    )
                                }
                            />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Phone number (<span className="red">*</span>):
                            </label>
                            <input
                                className={
                                    validInputs.phone
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                type="text"
                                value={userData.phone}
                                onChange={(event) =>
                                    handleOnChangeInput(
                                        event.target.value,
                                        "phone"
                                    )
                                }
                            />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Username (<span className="red">*</span>):
                            </label>
                            <input
                                className={
                                    validInputs.username
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                type="text"
                                value={userData.username}
                                onChange={(event) =>
                                    handleOnChangeInput(
                                        event.target.value,
                                        "username"
                                    )
                                }
                            />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Password (<span className="red">*</span>):
                            </label>
                            <input
                                className={
                                    validInputs.password
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                type="password"
                                value={userData.password}
                                onChange={(event) =>
                                    handleOnChangeInput(
                                        event.target.value,
                                        "password"
                                    )
                                }
                            />
                        </div>

                        <div className="col-12  form-group">
                            <label>Address :</label>
                            <input
                                className={
                                    validInputs.address
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                type="text"
                                value={userData.address}
                                onChange={(event) =>
                                    handleOnChangeInput(
                                        event.target.value,
                                        "address"
                                    )
                                }
                            />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>Gender :</label>
                            <select
                                className="form-select"
                                onChange={(event) =>
                                    handleOnChangeInput(
                                        event.target.value,
                                        "gender"
                                    )
                                }>
                                <option defaultValue value="Male">
                                    Male
                                </option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Group (<span className="red">*</span>):
                            </label>
                            <select
                                className={
                                    validInputs.group
                                        ? "form-select"
                                        : "form-select is-invalid"
                                }
                                type="text"
                                onChange={(event) =>
                                    handleOnChangeInput(
                                        event.target.value,
                                        "group"
                                    )
                                }>
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
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleConfirmUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default ModalUser;

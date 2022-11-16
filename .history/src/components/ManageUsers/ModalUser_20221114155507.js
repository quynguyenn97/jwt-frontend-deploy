import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchGroup } from "../../services/userService";
import { toast } from "react-toastify";
const ModalUser = (props) => {
    const defaultUserData = {
        email: "",
        phone: "",
        username: "",
        password: "",
        sex: "",
        group: "",
    };
    const [userData, setUserData] = useState(defaultUserData);
    const [userGroups, setUserGroups] = useState([]);
    const { show, handleClose, dataModal } = props;
    useEffect(() => {
        getGroup();
    }, []);
    const getGroup = async () => {
        let res = await fetchGroup();
        console.log(res);

        if (res && res.data && res.data.EC === 0) {
            setUserGroups(res.data.DT.DT);
        } else {
            toast.error(res.data.EM);
        }
    };
    console.log(userGroups);
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
                            <input className="form-control" type="email" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Phone number (<span className="red">*</span>):
                            </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Username (<span className="red">*</span>):
                            </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>
                                Password (<span className="red">*</span>):
                            </label>
                            <input className="form-control" type="password" />
                        </div>

                        <div className="col-12  form-group">
                            <label>Address :</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label>Gender :</label>
                            <select className="form-select">
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
                            <select className="form-select" type="text">
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default ModalUser;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalUser = (props) => {
    const { show, handleClose, dataModal } = props;
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

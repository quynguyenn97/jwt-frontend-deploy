import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalDelete = (props) => {
    const { show, handleClose, confirmDeleteUser, dataModal } = props;
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Confirm Delete User: {dataModal.email}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, are you sure to delete this user!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => confirmDeleteUser(dataModal.id)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDelete;

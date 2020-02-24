import React, {useState} from "react";
import './DeleteConfirmationModal.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DeleteConfirmationModal(props) {

    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isCounterName = (value) => {
        if (value === props.name) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter counter name <b>{props.name}</b> to delete it</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='border' type='text' onChange={e => isCounterName(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => props.remove(props.id)} disabled={disabled}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteConfirmationModal;
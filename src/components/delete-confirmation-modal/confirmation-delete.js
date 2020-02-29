import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Input from "reactstrap/es/Input";

export default function ConfirmationDelete(props) {

        const [isDisabledDeleteConfirmationButton, setIsDisabledDeleteConfirmationButton] = useState(true);

    const modalConfirmationUserInputChange = (e) => {
    const inputText = e.target.value;
    setIsDisabledDeleteConfirmationButton( inputText.trim().toLowerCase() !== props.name.trim().toLowerCase());
    };

    const deleteButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
        props.onSuccess();
    };

    const cancelButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
        props.onCancel();
    };

    return (
        <div>
            <Modal isOpen={Boolean(props.name)} toggle={props.onCancel}>
                <ModalHeader>Delete confirmation</ModalHeader>
                <ModalBody>
                    Enter counter name <strong>{props.name}</strong> to delete it
                    <Input onChange={modalConfirmationUserInputChange}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger"
                            disabled={isDisabledDeleteConfirmationButton}
                            onClick={deleteButtonClick}
                    >Delete</Button>{' '}
                    <Button color="secondary"
                            onClick={cancelButtonClick}
                    >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
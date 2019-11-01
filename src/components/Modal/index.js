import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Modal.css";

function Modalview(props) {

    const [modal, setmodal] = useState(false);

    const toggle = () => setmodal(!modal); 

    return (
        <div>
            <Modal isOpen={modal} onClick={toggle} id={props.id}>
            <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          {props.description}
        </ModalBody>
        <ModalFooter>
          <Button href={props.link} target="_blank" color="primary" size="sm">Website</Button>{' '}
          <Button href={props.repo} target="_blank" color="secondary" size="sm">Repository</Button>
        </ModalFooter>
            </Modal>

        </div>
    );
};

export default Modalview;
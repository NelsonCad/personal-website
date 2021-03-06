import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Modal.css";

const Modalview = (props) => {

  

    return (
        <div>
            <Modal isOpen={props.newModal} id={props.id}
            toggle={props.newToggle}
            onClose={props.newClose}>
            <ModalHeader toggle={props.newToggle}>{props.title}</ModalHeader>
        <ModalBody>
          {props.details}
        </ModalBody>
        <ModalFooter>
          <Button href={props.link} target="_blank" color="primary" size="md">Website</Button>{' '}
          <Button href={props.repo} target="_blank" color="secondary" size="md">Repository</Button>
        </ModalFooter>
            </Modal>

        </div>
    );
};

export default Modalview;
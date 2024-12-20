import React, { useState } from 'react';
import { createType } from '../../http/device-api';

import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';

export default function CreateType({show, onHide}) {
  const [value, setValue] = useState("");
  const addType = () => {
    createType({name: value}).then(() => {
      setValue("");
      onHide();
    })
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            placeholder={"Введите название типа"}
            onChange={e => setValue(e.target.value)} 
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

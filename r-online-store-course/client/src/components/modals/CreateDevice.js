import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';

import { createDevice, fetchBrands, fetchDevices, fetchTypes } from "../../http/device-api";

import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap';

export default observer(function CreateDevice({show, onHide}) {
  const { device } = useContext(Context);

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())
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
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mb-3">
            <Dropdown.Toggle>
              {device.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                device.types.map(type => 
                  <Dropdown.Item
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                  >
                    {type.name}
                  </Dropdown.Item>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mb-3">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                device.brands.map(brand => 
                  <Dropdown.Item
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                  >
                    {brand.name}
                  </Dropdown.Item>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            placeholder={"Введите название устройства"}
            className="mb-3"
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            value={price}
            type="number"
            placeholder={"Введите стоимость устройства"}
            className="mb-3"
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Form.Control
            type="file"
            className="mb-3"
            onChange={selectFile}
          />
          <hr />
          <Button
            variant="outline"
            className="mt-3"
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>
          {
            info.map(i => 
              <Row key={i.number} className="mt-3">
                <Col md={5}>
                  <Form.Control
                    value={i.title}
                    placeholder={"Введите название свойства"}
                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  />
                </Col>
                <Col md={5}>
                  <Form.Control
                    value={i.description}
                    placeholder={"Введите описание свойства"}
                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  />
                </Col>
                <Col md={2}  className="text-end">
                  <Button
                    variant="outline-danger"
                    onClick={() => removeInfo(i.number)}
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            )
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
})

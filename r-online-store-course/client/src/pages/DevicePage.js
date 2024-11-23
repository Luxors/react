import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchOneDevice } from '../http/device-api';

import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

export default function DevicePage() {
  const [ device, setDevice ] = useState({info: []});
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then(data => {setDevice(data)});
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <div
            className="d-flex flex-column justify-content-center"
            style={{width: 300, height: 300}}
          >
            <h2 className="mx-auto">{device.name}</h2>
            <div
              className="d-flex flex-grow-1 justify-content-center align-items-center"
              style={{fontSize: 100}}
            >
              {device.rating}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex justify-content-center align-items-center"
            style={{width: 300, height: 300}}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row
        className="d-flex flex-column m-3"
      >
        <h2>Характеристики</h2>
        {
          device.info.map(item => 
            <Row
              key={item.id}
              style={{background: item.id % 2 === 0 && "lightgray", padding: 10 }}
            >
              {item.title}: {item.description}
            </Row>
          )
        }
      </Row>
    </Container>
  )
}

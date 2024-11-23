import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

import { Col, Card } from 'react-bootstrap';

export default function DeviceItem({device}) {
  const navigate = useNavigate();

  return (
    <Col md={3} className='mt-3'>
    <Card
      style={{ width: '150', cursor: 'pointer' }}
      onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
    >
      <Card.Body>
        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + device.img} width={150} height={150} />
        <div className='d-flex justify-content-between align-items-cente mt-1'>
          <h6 className='mb-0 text-black-50'>{device.name}</h6>
          <div>
            {device.rating}
          </div>
        </div>
        <Card.Title>{device.name}</Card.Title>
      </Card.Body>
    </Card>
    </Col>
  )
};

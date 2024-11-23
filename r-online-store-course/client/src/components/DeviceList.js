import React from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';

import { Row } from 'react-bootstrap';

import DeviceItem from './DeviceItem';

export default observer(function DeviceList() {
  const { device } = React.useContext(Context);

  return (
    <Row>
      {
        device.devices.map(device =>
          <DeviceItem key={device.id} device={device} />
        )
      }
    </Row>
  )
})

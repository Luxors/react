import React from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';

import { ListGroup } from 'react-bootstrap';

export default observer(function Shop() {
  const { device } = React.useContext(Context);
  return (
    <ListGroup>
      {
        device.types.map(type => 
          <ListGroup.Item
            key={type.id}
            active={type.id === device.selectedType.id}
            style={{cursor: 'pointer'}}
            onClick={() => {
              console.log(type);
              device.setSelectedType(type)
            }}
          >
            {type.name}
          </ListGroup.Item>
        )
      }
    </ListGroup>
  )
});

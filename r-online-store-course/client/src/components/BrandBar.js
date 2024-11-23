import React from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';

import { Row, Card } from 'react-bootstrap';

export default observer(function BrandBar() {
  const { device } = React.useContext(Context);

  return (
    <Row className=''>
      {
        device.brands.map((brand) => (
          <Card
            key={brand.id}
            className='w-auto p-4'
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            style={{ cursor: 'pointer' }}
            onClick={() => device.setSelectedBrand(brand)}
          >
            { brand.name }
          </Card>
         ))
      }
    </Row>
  )
});

import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
  margin-bottom: 55px;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`
const LightText = styled.p`
  margin-bottom: 32px;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`
const OrderButton = styled.button`
  width: 247px;
  height: 67px;
  background-color: #ffa14b;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 30px;
`

class Main extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={6} lg={5}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <LightText>
            Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 рублей, с установкой в подарок!
          </LightText>
          <OrderButton>
            Отправить заявку!
          </OrderButton>
        </Col>

        <Col sm={6} lgOffset={1}>
          <Slider />
        </Col>
      </Row>
    )
  }
}

export default Main

import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`
const WorkTime = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;
  span {
    display: block;
    color: #464646;
    font-size: 18px;
    font-weight: 700;
  }
`
const Call = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;
  span {
    display: block;
    color: #464646;
    font-size: 18px;
    font-weight: 700;
  }
`
const CallButton = styled.button`
  width: 176px;
  height: 48px;
  background-color: #3fc7db;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  border: none;
  border-radius: 30px;
`

class Adress extends React.Component {
  render() {
    return (
      <span> {this.props.addr} </span>
    )
  }
}
  
class PhoneNumber extends React.Component {
  render() {
    return (
      <span> {this.props.tel} </span>
    )
  }
}

class Menu extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={3}>
          <Repair>
            Ремонт айфонов в сервисном центре и на выезде
          </Repair>
        </Col>
        <Col sm={3} lgOffset={1}>
          <WorkTime>
            Пн-пт с 10 до 20, сб,вс с 11 до 18
            <Adress addr="Криворожская, 301" />
          </WorkTime>
        </Col>
        <Col sm={3} >
          <Call>
            Звонки принимаются 24 часа
            <PhoneNumber tel="8 (846) 922 55 44 " />
          </Call>
        </Col>
        <Col sm={2} >
          <CallButton>
            Заказать звонок!
          </CallButton>
        </Col>
      </Row>
    )
  }
}

export default Menu
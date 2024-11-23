import React, { useState, useContext } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from "../http/user-api";
import { Context } from '../index';

import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';

export default observer(function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const { user } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
  
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
  
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card className="p-5" style={{width: 600}}>
        <h2 className="mx-auto">
          { isLogin ? "Авторизация" : "Регистрация" }
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            placeholder="Введите ваш email"
            className="mt-3"
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            type="password"
            value={password}
            placeholder="Введите пароль"
            className="mt-3"
            onChange={e => setPassword(e.target.value)}
          />
          <Row className="justify-content-between mt-3">
            <Col>
              <div className="text-nowrap">
                {
                  isLogin ?
                    <span>Нет аккаунта? <NavLink to={ REGISTRATION_ROUTE }>Зарегестрируйтесь</NavLink></span>
                    :
                    <span>Есть аккаунт? <NavLink to={ LOGIN_ROUTE }>Войдите</NavLink></span>
                }
              </div>
            </Col>
            <Col className="text-end">
              <Button
                variant="outline-success"
                className="w-auto"
                onClick={click}
              >
                { isLogin ? "Войти" : "Регистрация" }
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})


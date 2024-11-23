import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

import { Container, Navbar, Nav, Button } from 'react-bootstrap';

export default observer(function NavBar() {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>КупиДевайс</Navbar.Brand>
        { user.isAuth ?
          <Nav className="ml-auto">
            <Button 
              variant={'outline-light'} 
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button 
              variant={'outline-light'} 
              className="ms-2"
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </Nav>
          : 
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
})

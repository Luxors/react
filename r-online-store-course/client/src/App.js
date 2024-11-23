import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { observer } from 'mobx-react-lite';

import { Context } from './index';
import { check } from './http/user-api';

import { Spinner } from 'react-bootstrap';

import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

export default observer(function App() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(() => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

// export default App;

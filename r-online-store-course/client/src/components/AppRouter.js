import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';

export default function AppRouter() {
  const { user, device } = useContext(Context);
  // console.log({ user, device });
  
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={ path } path={ path } element={ <Component /> } exact />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={ path } path={ path } element={ <Component /> } exact />
      )}
      <Route path="*" element={<Navigate replace to={ SHOP_ROUTE } />} />
    </Routes>
  )
}
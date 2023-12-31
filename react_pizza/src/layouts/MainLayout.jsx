import React from 'react';
import Header from '../componets/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

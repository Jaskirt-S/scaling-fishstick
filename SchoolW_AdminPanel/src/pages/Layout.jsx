import React from 'react';
import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-row">
      <Navigation></Navigation>
      <Outlet/>
    </div>
    
    </>
  );
};

export default Layout;

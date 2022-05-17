import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import Footer from '../Component/Footer'
import Rentkart from '../Component/Rentkart'
import SideBar from '../Component/Sidebar'
import Login from "../Component/Login";

export default function Layout({children}) {
  // const {isLoginModalOpen} = useSelector((state) => ({
  //   isLoginModalOpen: state.userStore.isLoginModalOpen,
  // }), shallowEqual);
  return (
    <div>
      <Rentkart />
      {/* <SideBar isOpen={isLoginModalOpen}>
        <Login />
       </SideBar>   */}
      <div className='main-container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

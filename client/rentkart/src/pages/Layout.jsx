import React, {useCallback} from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { SET_LOGIN_MODAL_OPEN } from '../redux/action';
import Footer from '../component/Footer'
import Rentkart from '../component/Rentkart'
import SideBar from '../component/Sidebar'
import Login from "../component/Login";
import AuthModal from '../component/AuthModal';

export default function Layout({children}) {
  const dispatch = useDispatch();

const handleLoginModal = useCallback(() => {
  dispatch({type: SET_LOGIN_MODAL_OPEN, payload: false});
},[dispatch])

  const {isLoginModalOpen} = useSelector((state) => ({
    isLoginModalOpen: state.userStore.isLoginModalOpen,
  }), shallowEqual);
  return (
    <div>
      <Rentkart />
      <SideBar isOpen={isLoginModalOpen}>
        <button className='sidebar-closeBtn' onClick={handleLoginModal}>X</button>
        <AuthModal />
       </SideBar>  
      <div className='main-container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

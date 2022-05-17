import React, {useCallback, useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { SET_LOGIN_MODAL_OPEN, SET_USER_DATA } from '../redux/action';
import { useGetInfo } from '../hooks/useGetInfo';
import Footer from '../component/Footer'
import Rentkart from '../component/Rentkart'
import SideBar from '../component/Sidebar'
import AuthModal from '../component/AuthModal';

export default function Layout({children}) {
  const dispatch = useDispatch();

const handleLoginModal = useCallback(() => {
  dispatch({type: SET_LOGIN_MODAL_OPEN, payload: false});
},[dispatch])

  const {isLoginModalOpen, userData } = useSelector((state) => ({
    isLoginModalOpen: state.userStore.isLoginModalOpen,
    userData: state.userStore.userData,
  }), shallowEqual);


  // set user sessioon token in sessionStorage
  useEffect(() => {
    console.log((_.isEmpty(userData) || _.isUndefined(userData)))
    if(!(_.isEmpty(userData)) && userData?.token) {
    sessionStorage.setItem('user', JSON.stringify(userData.token))
    }
  },[userData])


  // get user session token from sessionStorage

  useEffect(() => {
    const getInfo = async() => {
      try {
        const authToken = sessionStorage.getItem('user');
        if(authToken && (_.isEmpty(userData) || _.isUndefined(userData))) {
          const data = await useGetInfo();
          dispatch({type: SET_USER_DATA, payload: data});
        }
      }catch(error) {
      console.log(error)
      }
    }
      getInfo();
  }, [userData])

  return (
    <div>
      <Rentkart userData={userData}/>
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

import { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { SET_LOGIN_MODAL_OPEN } from '../redux/action';
import '../index.css';
import '../styles/nav.css';
import '../styles/index.scss';

import logo from "../images/logo.png"
import HouseLogo from "../images/house.svg"
import Avatar from './Avatar';

export default function Rentkart({userData}) {
const dispatch = useDispatch();

const handleLoginModal = useCallback(() => {
  dispatch({type: SET_LOGIN_MODAL_OPEN, payload: true});
},[dispatch])


  return (
    <header className="header sticky" >
      <a href="#" target="_blank">
        <img 
        src={logo}
        alt="Just Rent it"
        className="logo"/>
      </a>   
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a className="navbar-link" href="#">Services</a></li>
          <li>
            <a
            className="navbar-link"
            href="landlord"
            >
              <img src={HouseLogo} alt="logo" />
              List Your Property
            </a>
          </li>
          <li>
            {_.isEmpty(userData) || _.isUndefined(userData) ?
              <div 
                onClick={handleLoginModal} 
                className="btn btn-outline-primary myButton1 cursor"
              >
                Login
              </div>
              :
              <>
              <Avatar userData={userData.user ?? userData}/> 
              </>
              }
          </li>
        </ul>
      </nav>

      <div  className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>
  )
}

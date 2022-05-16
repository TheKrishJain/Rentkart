import { useCallback } from 'react'
import { useDispatch } from 'react-redux';

import { SET_LOGIN_MODAL_OPEN } from '../redux/action';
import '../index.css';
import '../styles/nav.css';
import '../styles/index.scss';

import logo from "../assets/logo.png"
import HouseLogo from "../images/house.svg"

export default function Rentkart() {
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
          <li><div onClick={handleLoginModal} className="btn btn-outline-primary myButton1 cursor">Login</div></li>
        </ul>
      </nav>

      <div  className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>
  )
}

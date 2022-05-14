import React from 'react'
import '../styles/index.scss';
import './Footer';
import Footer from './Footer';
import Login from './Login';
import Sidebar from './Sidebar';

export default function Rentkart() {
  return (
    <div>
    <h1 className="card">Rentkart</h1>
    

    <Sidebar/>
    <Footer/>

    
    </div>
  )
}

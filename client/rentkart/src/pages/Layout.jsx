import React from 'react'
import Footer from '../component/Footer'
import Rentkart from '../component/Rentkart'

export default function Layout({children}) {
  return (
    <div>
      <Rentkart />
      <div className='main-container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

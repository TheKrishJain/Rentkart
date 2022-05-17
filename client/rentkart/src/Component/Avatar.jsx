import React from 'react'
import FallbackImg from '../images/img_placeholder.svg';
import '../styles/_avatar.scss';
import { mockColors } from '../utils/Cards';

export default function Avatar({userData}) {
  const color = mockColors[ (userData.name).length % 6];
  //
  return (
    <div>
    {/* {userData.thumbnail ? 
    <img src={userData.thumbnail}
     alt={userData.name}
     onError={(e) => (e.currentTarget.src = FallbackImg)} 
    />: */}
    <div style={{background: `${color}`}} className='avatar avatar_initials'>
      {userData.name[0]}
    </div>
    {/* } */}
    </div>
  )
}

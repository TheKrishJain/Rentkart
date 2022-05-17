import React from 'react'
import { useParams } from 'react-router-dom';
import Description from '../component/Description';
import ShowCarousel from '../component/showCarousel';

export default function RoomPage() {

  return (
    <div>
      <ShowCarousel />
      <Description />
    </div>
  )
}

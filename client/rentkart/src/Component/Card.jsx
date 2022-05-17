import React from 'react'

import FallbackImg from '../images/img_placeholder.svg';
import '../styles/_card.scss'

const Card = ({ children, ...props }) => (
    <button className='card' type="submit">
    <img  
			className='card__picture' 
			src={props.roomPhoto || FallbackImg}  
			onError={(e) => (e.currentTarget.src = FallbackImg)} 
			alt={"img"}
    />
    <div className='card__info'>
    <p className='card__info--desc'>{props.description}</p>
    <span className='card__info--rent'>Rent- {props.rentalPrice}/ -P.M</span>
    {children ? <>{children}</> : null}
    </div>
    </button>
);

export default Card;

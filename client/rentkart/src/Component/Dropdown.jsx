import React from 'react'
import'../styles/Dropdown.scss'

function Dropdown({selected,setSelected}) {
    
const [isActive,setActive]=React.useState(false);
const options =['a','b','c']
    return (

        <div className='Dropdown-wrapper'>

            <div className='Dropdown-button' onClick={(e)=>setActive(!isActive)}>

                {selected}
                    
                            
                  {isActive  && ( <div className='Dropdown-content'>
                 {options.map((option)=>(
                 <div onClick={(e)=>{
                     setActive(false)
                     setSelected(option)
                 }} className='Dropdown-item'>
                     {option}
                    </div>))}
                    </div>) }

                </div>
         
        </div>
     
       


     )

}
export default Dropdown
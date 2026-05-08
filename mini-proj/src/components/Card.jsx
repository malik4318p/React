import React from 'react'
import { Bookmark } from 'lucide-react'
function Card(props) {
  return (


        <div className='card'>
            <div className='top'>
                <img src=' data:image/png;base64,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' 
                
                alt='companny logo'></img>

                <button className='saveButton'>Save  <Bookmark size={18} /> </button>
            </div>
            <div className='mid'>
                <h3>{props.elem.company} <span id = "time"> {props.elem.time}</span></h3>
                <h2>{props.elem.role}</h2>
                <span>{props.elem.type} </span>
                <span>{props.elem.level}</span>
            </div>
            <div className='Bottom'>
                <div>
                    <h3>{props.elem.salary}</h3>
                    <span>{props.elem.locationn}</span>
                </div>
                <button>Apply now</button>
            </div>
        </div>


  )
}

export default Card

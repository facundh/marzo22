import React, { useState } from 'react'
import Card from '../../ui/Card'

const DashBoard = () => {

  const [ color, setColor ] = useState('#fff');
  const [ backgroundColor, setBackgroundColor ] = useState('#f44');


  return (
    <>
    
    <div>DashBoard</div>
    <div style={{'color': color, 'backgroundColor': backgroundColor, 'width': 100, 'height': 100}}>
        Hola
    </div>
    
    </>
  )
}

export default DashBoard
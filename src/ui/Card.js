import React from 'react'

const Card = ({
    className, 
    logo,
    text,
    click
}) => {
  return (
    <>
    

        <Card 
            className={className}
            logo={logo}
            text={text}
            onClick={click}
        />
    
    </>
  )
}

export default Card
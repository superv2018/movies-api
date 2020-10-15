import React from 'react';


const cardStyle = {
    border: '1px solid grey',
    height: '200px',
    margin: '10px',
    width: '100px'
}

const Card = () => {
    return (
        <div style={cardStyle}>
            <p>Hello</p>
        </div>
    )
}

export default Card;
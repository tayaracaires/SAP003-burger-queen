import React from 'react';


const Card = (props) => {
    return (
        <div onClick = {props.handleClick}>
            <p>{props.name}</p>
            <p>R${props.price},00</p>
        </div>
    )
}

export default Card
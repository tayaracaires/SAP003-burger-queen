import React from 'react';

function Button(props) {
    return (
    <button className={props.class} onClick={props.handleClick}>{props.title}{props.addTitle}</button>
    )
}

export default Button
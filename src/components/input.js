import React from  'react';

function Input(props) {
    return (
        <div className={props.class}>
            <label>{props.label}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.handleChange}/>
        </div>
    )
}

export default Input
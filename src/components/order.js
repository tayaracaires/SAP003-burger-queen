import React from 'react';
import Button from './button';

function Order(props) {
    return (
        <li key={props.id}>
            <div class="ordem-itens">
                {props.unit}
                {props.name}
                {props.price}
            </div>
            <Button title={'x'}/>
        </li>
    )
}

export default Order
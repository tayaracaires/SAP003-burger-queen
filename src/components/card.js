import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Card (props) {
    return (
            <div onClick={props.handleClick} className={css(styles.card)}>
                <p>{props.name}</p>
                <p>R$ {props.price},00</p>
            </div>
    )
};

const styles = StyleSheet.create({
    card:{
        textAlign: 'center',
        borderRadius: '2vw',
        border:' 1px solid #3F3FBF',
        fontSize: '2vw'
    }
})

export default Card
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Card (props) {
    return (
            <div onClick={props.handleClick} id={props.id} className={css(styles.card)}>
                <p>{props.name}</p>
                <p>R${props.price},00</p>
            </div>
    )
};

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#3F9FBF',
        color: '#0C0804',
        width: '15vw',
        height: 'auto',
        margin: '2vw 1.5vw 1vw 1.5vw',
        fontSize: '0.9rem',
        borderRadius: '2vw',
        fontWeight: 'bold',
        border: 'none',
    }
})

export default Card
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';


function Button(props) {
    return (
    <button id={props.id} className={css(props.class || styles.button)} onClick={props.handleClick}>{props.title}</button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#b7a995',
        color: '#F4F4F4',
        width: '14vw',
        margin: '0.3rem',
        fontSize: '0.8rem',
        borderRadius: '2vw',
        fontWeight: 'bold',
        border: 'none',
        padding: '1vw',
        
        '@media (min-width: 992px)': {
            height: 'auto',
        }
    }
    
})

export default Button
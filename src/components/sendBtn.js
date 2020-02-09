import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function SendButton(props) {
    return (
    <button type={props.type} className={props.class} onClick={props.handleClick} className={css(styles.sendBtn)}>{props.title}{props.addTitle}</button>
    )
}

const styles = StyleSheet.create({
    sendBtn:{
        backgroundColor: ' #3F9FBF',
        color: '#F4F4F4',
        width: '14vw',
        height: 'auto',
        margin: '1vw 0',
        fontSize: '0.8rem',
        textAlign: 'center',
        borderRadius: '2vw',
        fontWeight: 'bold',
        border: 'none',
        padding: '1vw'
    }
})

export default SendButton
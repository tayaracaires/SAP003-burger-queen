import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Card (props) {
    return (
        <div className={css(style.card)}>
            <p>Cliente: {props.name}</p>
            <p>Mesa: {props.table}</p>
               <ol className={css(style.listItens)}>Itens:
                <ul className={css(style.itens)}></ul>{props.order}
            </ol>
        </div>
    )
};

const style = StyleSheet.create({
    card: {
        backgroundColor: '#d3cbbf',
        borderStyle: 'dash',
        alignItems: 'center',
        overflow: 'auto',
        width: '20vw',
        height: 'auto',
        margin: '2vw 1.5vw 1vw 1.5vw',
        padding: '2vw',
        borderRadius: '2vw',
        textAlign: 'initial'
    },
    listItens: {
        width: 'auto',
        height: '40vw',
        fontSize: '1.0rem',
        padding: '1vw',
        margin: '0',
    }    
})

export default Card
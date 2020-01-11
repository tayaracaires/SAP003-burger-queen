import React from 'react';
import { StyleSheet, css} from 'aphrodite';
import Button from './button'

function Order(props) {
    return (
        <div className={css(styles.order)}> 
            <ol className={css(styles.orderlist)}>
                <ul className={css(styles.listName)}>Quantidade: {props.unit}</ul>
                <ul className={css(styles.listName)}>Nome: {props.name}</ul>
                <ul className={css(styles.listName)}>Preço: R$ {props.price},00</ul>
            </ol>
            <div><Button handleClick={props.delete}/></div>
        </div>
    )
}

const styles = StyleSheet.create({
    order:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderList: {
        color: '#0C0804',
        width: 'auto',
        height: 'auto',
        fontSize: '0.8rem',
        padding: '1vw',
        margin: '0',
    },
    listName:{
        padding: '0'
    }
})

export default Order
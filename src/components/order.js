import React from 'react';
import { StyleSheet, css} from 'aphrodite';
import DeleteButton from './deleteBtn';

function Order(props) {
    return (
        <div className={css(styles.order)}> 
            <ol className={css(styles.orderlist)}>
                <ul className={css(styles.listName)}>x{props.unit}</ul>
                <ul className={css(styles.listName)}>Item: {props.name}</ul>
                <ul className={css(styles.listName)}>R$ {props.price},00</ul>
            </ol>
            <div><DeleteButton handleClick={props.delete}/></div>
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
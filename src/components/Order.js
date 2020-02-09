import React from 'react';
import { StyleSheet, css} from 'aphrodite';
import DeleteButton from './deleteBtn';

const Order = (props) => {
    return (
        <div className={css(styles.order)}> 
            <ol className={css(styles.orderlist)}>
                <ul className={css(styles.listName)}>x{props.unit} <DeleteButton handleClick={props.delete}/></ul>
                <ul className={css(styles.listName)}>{props.name} R$ {props.price},00</ul>
            </ol>            
        </div>
    )
}

const styles = StyleSheet.create({
    order:{
        display: 'block',
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderList: {
        color: '#622162',
        width: 'auto',
        height: '40vw',
        fontSize: '0.8rem',
        padding: '1vw',
        margin: '0',
    },
    listName:{
        padding: '0'
    }
})

export default Order
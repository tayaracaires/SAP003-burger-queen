import React from  'react';
import { StyleSheet, css} from 'aphrodite';

function Input(props) {
    return (
        <input 
            placeholder={props.placeholder} 
            className={css(styles.input)}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            min={props.min}
        >
        </input> 
    )
}

const styles = StyleSheet.create({

    input:{
        borderRadius: '2vw',
        borderColor: '#3F3FBF',
        width: '25vw',
        height: '2vh',
        margin: '0vw 3vw 1vw 3vw',
        padding: '1vw'
    }

})

export default Input
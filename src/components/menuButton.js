import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function MenuButton(props) {
  return (
    <div>
      <button onClick={props.handleClick} id={props.id} className={css(styles.mainMenu)}>
        {props.title}
      </button>

    </div>
  )
}
const styles = StyleSheet.create({
  mainMenu: {
    backgroundColor: '#622162 ',
    color: '#F4F4F4',
    width: '17vw',
    height: 'auto',
    marginLeft: '1vw',
    fontSize: '1rem',
    borderRadius: '2vw',
    fontWeight: 'bold',
    border: 'none',
    padding: '1vw',
  }
})

export default MenuButton;
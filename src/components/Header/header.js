import React from 'react';
// import 'src/components/Header/logo.png';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
    return (
        <header className={css(styles.header)}>
            <img src={'src/components/Header/logo.png'} className={css(styles.image)} alt="Logo" />
        </header>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '22vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },

    image: {
        height: 'auto',
        maxWidth: '100%'
    }
})

export default Header; 
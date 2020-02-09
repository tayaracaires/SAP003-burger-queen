import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../Images/logo.png';

const Header = () => {
    return (
        <>
        <header className={css(styles.header)}>
            <img className={css(styles.logo)} src={Logo} alt="Logo Burger Queen"/>
        </header>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        height: '18vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '@media (min-width: 992px)': {
            height: '35vh',
        }
    },

    logo: {
        height: '100%',
        maxWidth: '100%'
    }
})

export default Header; 
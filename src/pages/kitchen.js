import React, { useEffect, useState } from 'react';
import firebaseApp from '../utils/firebaseconfig';
import { StyleSheet, css } from 'aphrodite';
import Card from '../components/CardKitchen';


const Kitchen = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        firebaseApp.firestore().collection('order').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                setOrders((currentState) => [...currentState, doc.data()]);
            })
        })  
    }, [])

    return (
        <div>
            <h1 className={css(style.title)}>Pedidos para preparo</h1>
            <main className={css(style.kitchen)}>
                <section className={css(style.orders)}>
                    {orders.map((demanded, index) =>
                        <div key={index}>
                            <Card
                                name={demanded.name}
                                table={demanded.table}
                                order={demanded.order.map((i, id) => (
                                    <div key={id}>
                                        <p className={css(style.itens)}>{i.unit + ''} {i.name}</p>
                                    </div>
                                ))}
                            />
                        </div> 
                    )}
                </section>
            </main>
        </div>    
    );
}

const style = StyleSheet.create({

    kitchen: {
        fontFamily: ['Montserrat', 'sans-serif'],
        src: "url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap')",
        display: 'flex',
        flexDirection: 'row',
        padding: '1vw',
        justifyContent: 'center',
    },
    orders: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0.5vw',
    },
    title: {
        textAlign: 'center',
    },
    itens: {
        fontStyle: 'italic',
    },

})

export default Kitchen
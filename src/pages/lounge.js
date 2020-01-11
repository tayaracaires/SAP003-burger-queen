import React, { useEffect, useState } from 'react';
import firebaseApp from '../firebaseconfig';
import { StyleSheet, css } from 'aphrodite';
import Card from '../components/card';
import Button from '../components/button';
import Order from '../components/order';

function Restaurant () {
    const [ menu, setMenu ] = useState([]);
    const [ menu1, setMenu1 ] = useState([]);
    const [ menu2, setMenu2 ] = useState([]);
    const [ order, setOrder ] = useState([]);
    const [ modal, setModal ] = useState({status: false});
    const [ options, setOptions] = useState('');
    const [ extras, setExtras ] = useState('');
    const [ client, setClient ] = useState('');
    const [ table, setTable ] = useState('');
    const [ total, setTotal] = useState([]);
    const [resumo, setResumo] = useState([]);
    
    useEffect(()=> {
        firebaseApp.firestore().collection('Menu').where('breakfast', '==', true )        
        .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                setMenu1((currentState) => [...currentState, doc.data()]);
            })
        })    
        firebaseApp.firestore().collection('Menu').where('day', '==', true )        
        .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                setMenu2((currentState) => [...currentState, doc.data()]);
            })    
        })
    }, [])

    

    const addOrder = (menuItem) => {
        const findItem = order.find(item => item.name === menuItem.name)
        if(findItem) {
            findItem.unit ++
            setOrder([...order]);
        } else {
            setOrder([...order, menuItem]) 
        }
    }

    const verifyOptions = (menuItem) => {
        if (menuItem.option.length !== 0){
            setModal({status: true, item: menuItem});
        } else {
            addOrder(menuItem);
        }
    }
    
    const addOptionsExtras = () => {
        const updatedItem = {...modal.item, name: `${modal.item.name} ${options} ${extras}`};
        addOrder(updatedItem);
        setModal({status: false});
    }

    const sendOrder = (e) => {
        e.preventDefault()

        if (resume.length && table && client) {
            firebaseApp.firestore().collection('order').add({                
                order: order,
                total: total,
                name: client,
                table: parseInt(table),
                timeSend: new Date(),
                timeDateS: new Date().getDate(),
                timeHourS: new Date().getHours(),  
                timeMinS: new Date().getMinutes(),
                timeSecS: new Date().getSeconds(),
                status: 'inProgress',
            }) 
            .then(() => {
                setResume([])
                setBill(0)
                setClient('')
                setTable(0)
                alert('Pedido enviado com sucesso')
            })    
        }
        else if (!resumo.length) {
            alert('Um item deve ser selecionado')
        }
        else if (!table) {
            alert('Digite o número da mesa')
        }
        else if (!client) {
            alert('Digite o nome do cliente')
        }
    }

    const bill = () => order.reduce((acc, menuItem)=> {
        return acc + (menuItem.price* menuItem.unit)
    }, 0)
    

    return (
        <>
            <main className={css(styles.main)}>

            {menu.map((menuItem, index) => {
                return (
                    <div key={index} className={css(styles.menu)}>
                        <Card key={index} {...menuItem} handleClick={()=> {verifyOptions(menuItem)}}/>
                    </div>
                )
            } )}

            { modal.status ? (
                <div className={css(styles.options)}>
                    <h3>Extras</h3>
                    {modal.item.extra.map((elem, index) => (
                        <div key={index}>
                            <input onChange={() => setExtras(elem)} type="radio" name="extras" value={elem}/>
                            <label>{elem}</label>
                        </div>
                    ))}
                    <h3>Opções</h3>
                    {modal.item.option.map((elem, index) => (
                        <div key={index}>
                            <input onChange={() => setOptions(elem)} type="radio" name="options" value={elem}/>
                            <label>{elem}</label>
                        </div>
                    ))}
                    <button onClick={addOptionsExtras}>Adicionar</button>
                </div>            
            ): false}

            <section className={css(styles.order)}>
                <h1>Pedido</h1>
                {order.map((item) => 
                  <Order name= {item.name} price={item.price} unit= {item.unit}/>
                )}
                <p>Total: R$ {bill()},00 </p>
                <Button id={'send-order'} handleClick={sendOrder} title="Enviar para a cozinha"/>
            </section> 
            </main>     
        </>
    );
}


const styles = StyleSheet.create({
    main: {
        fontFamily: ['Montserrat', 'sans-serif'],
        src: "url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap')",
        display: 'flex',
        flexFlow: ['columm', 'wrap'],
        padding: '1vw',
        justifyContent: 'center',
    },

    menu:{
        width: '50vw',
    },

    order: {
        display: 'flex',
        flexDirection: 'column',
        borderColor:'#FFB800',
        borderStyle: 'solid',
        borderWidth: '1vw',
        borderRadius: '2vw',
        width: '30vw',
        height: 'max-content',
        padding: '1vw'
    },

    options: {
        display: 'flex',
        flexFlow: ['row', 'wrap'],
        justifyContent: 'center',
    },

    secMenu:{
        display: 'flex',
        justifyContent: 'center',
        flexFlow: ['column', 'wrap'],
        
    }

})

export default Restaurant;
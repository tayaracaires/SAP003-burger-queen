import React, { useEffect, useState } from 'react';
import firebaseApp from '../firebaseconfig';
import { StyleSheet, css } from 'aphrodite';
import Card from '../components/card';
import MenuButton from '../components/Menu/menuButton';
import Button from '../components/button';
import Order from '../components/order';
import Input from '../components/input';
// import Header from '../components/Header/header';

function Restaurant () {
    const [ menu, setMenu ] = useState([]);
    const [ menuType, setMenuType ] = useState([]);
    const [ order, setOrder ] = useState([]);
    const [ modal, setModal ] = useState({status: false});
    const [ options, setOptions] = useState('');
    const [ extras, setExtras ] = useState('');
    const [ client, setClient ] = useState('');
    const [ table, setTable ] = useState('');
    const [ total, setTotal] = useState([]);
     
    useEffect(()=> {
        firebaseApp.firestore().collection('Menu').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                setMenu((currentState) => [...currentState, doc.data()]);
            })
        })    
    }, [])  

    const filterMenu = (event) => {
        const dish = event.target.id;
        const validate = (dish === 'breakfast') ? true : false;
        const filteredMenu = menu.filter((elem) => elem.breakfast === validate);
        return setMenuType(filteredMenu);
    }

    const verifyOptions = (menuItem) => {
        if (menuItem.option.length !== 0){
            setModal({status: true, item: menuItem});
        } else {
            addOrder(menuItem);
        }
    }
    
    const addOptionsExtras = () => {
        const updatedItem = {...modal.item, name: `${modal.item.name} Opção: ${options} ${extras}`};
        addOrder(updatedItem);
        setModal({status: false});
    }

    const addOrder = (menuItem) => {
        const findItem = order.find(item => item.name === menuItem.name)
        if(findItem) {
            findItem.unit ++
            setOrder([...order]);
        } else {
            setOrder([...order, menuItem]) 
        }
    }

    const deleteItem = (product) => {
        if (order.includes(product)) {
            product.unit --
        }
        const remove = order.filter(el => el.unit > 0);
        setOrder([...remove]);
    }

    const bill = () => order.reduce((acc, bill)=> {
        if (extras.length !==0){
            return acc + ((bill.price + bill.priceEx) * bill.unit);
        } else {
            return acc + (bill.price * bill.unit)
        }
    }, 0)


    const sendOrder = (e) => {
        e.preventDefault()
        if (order.length && table && client) {
            firebaseApp.firestore().collection('order').add({                
                order: order,
                total: total,
                name: client,
                table: parseInt(table),
            }) 
            .then(() => {
                setOrder([])
                setTotal(0)
                setClient('')
                setTable(0)
                alert('Pedido enviado com sucesso')
            })    
        }
        else if (!order.length) {
            alert('Um item deve ser selecionado')
        }
        else if (!table) {
            alert('Digite o número da mesa')
        }
        else if (!client) {
            alert('Digite o nome do cliente')
        }
    }

    return (
        <>
            <main className={css(styles.main)}>
                <section className={css(styles.input)}>
                    <Input placeholder={'Nome do Cliente'}
                        className='input'
                        type={'text'}
                        value={client}
                        onChange={(event) => { setClient(event.target.value) }} />
                    <Input placeholder={'Mesa'}
                        className='input'
                        type={'number'}
                        value={table}
                        min={'0'}
                        onChange={(event) => { setTable(event.target.value) }} />                
                </section>    
                <div className={css(styles.menu)}>
                    <section className={css(styles.Options)}>
                        <MenuButton
                            handleClick={(event) => { filterMenu(event) }}
                            title='Café da Manhã'
                            id={'breakfast'} />
                        <MenuButton
                            handleClick={(event) => { filterMenu(event) }}
                            title='Cardápio'
                            id={'day'} />
                    </section>
                    <section className={css(styles.secMenu)}>
                        {menuType.map((selectedItem) =>
                            <Card
                                handleClick={() => verifyOptions(selectedItem)}
                                {...selectedItem} />
                        )}
                    </section>
                </div>
                <section className={css(styles.optionsExtras)}>
                    { modal.status ? (
                        <div className={css(styles.options)}>
                            <h2 className={css(styles.orderTitle)}>Extras</h2>
                            {modal.item.extra.map((elem, index) => (
                                <div key={index}>
                                    <input onChange={() => setExtras(elem)} type="radio" name="extras" value={elem}/>
                                    <label>{elem}</label>
                                </div>
                            ))}
                            <h2>Opções</h2>
                            {modal.item.option.map((elem, index) => (
                                <div key={index}>
                                    <input onChange={() => setOptions(elem)} type="radio" name="options" value={elem}/>
                                    <label>{elem}</label>
                                </div>
                            ))}
                            <button onClick={addOptionsExtras}>Adicionar</button>
                        </div>            
                    ): false}
                </section>
                <section className={css(styles.order)}>
                    <h1>Pedido</h1>
                    {order.map((item) => 
                    <Order name= {item.name} price={item.price} unit= {item.unit} delete={(event) =>{ 
                        event.preventDefault();
                        deleteItem(item)
                    }}/>
                    )}
                    <p className={css(styles.bill)}>Total: R$ {bill()},00 </p>
                    <Button id={'send-order'} handleClick={sendOrder} title="Enviar para a cozinha"/>
                </section> 
            </main>     
        </>
    );
}

const styles = StyleSheet.create({
    main: {
        fontFamily: ['Libre Baskerville', 'serif'],
        src: "url('https://fonts.googleapis.com/css?family=Karla|Libre+Baskerville|Martel&display=swap')",
        display: 'flex',
        flexFlow: ['columm', 'wrap'],
        padding: '1vw',
        justifyContent: 'center',
    },

    menu: {
        width: '50vw',
    },

    input: {
        marginBottom: '2vw',
    },

    order: {
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#3F3FBF',
        borderStyle: 'solid',
        borderWidth: '1vw',
        borderRadius: '2vw',
        width: '30vw',
        height: 'max-content',
        padding: '1vw',
        marginTop:'2vw',
    },

    options: {
        display: 'flex',
        flexFlow: ['row', 'wrap'],
        justifyContent: 'center',
    },

    optionsExtras:{
        height: 'min-content',
        width: 'auto',
        display: 'flex',
        flexFlow: ['column', 'wrap'],
        justifyContent: 'center',
    },

    secMenu: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: ['column', 'wrap'],
    },

    orderTitle: {
        textAlign: 'center',
        margin: '1vw 0',
        color: '#0C0804',
    },

    bill: {
        fontSize: '1.0rem',
        fontWeight: '600',
        margin: '1vw 1vw 0'
    },

    secExtras: {
        borderStyle: 'dashed',
        padding: '1vw',
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        borderColor: '#BBA250',
        fontSize: '0.8rem',
    },

})

export default Restaurant;
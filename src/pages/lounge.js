import React, { useState, useEffect } from 'react';
import firebaseApp from '../firebaseconfig';
import Card from '../components/card';
import Order from '../components/order';

function Menu () {
  const [Options, setOptions] = useState([]);
  
  useEffect (() => {
    firebaseApp.firestore().collection('Menu').get().then(snapshot => {
      snapshot.forEach(doc => {
        setOptions((Options) => [...Options, doc.data()]);
      });
    })     
  }, [])  
  
  return (
  <div>
    {Options.map(menuItem => 
      <Card name={menuItem.name} price={menuItem.price} handleClick={() => console.log(menuItem)}/>        
    )}
    <div>
      <Order unit={0} name={''} price={0}/>
 
    </div>
  </div>
  
  );
}

export default Menu
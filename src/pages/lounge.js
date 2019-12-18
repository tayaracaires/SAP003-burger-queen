import React, {useState, useEffect} from 'react';
import firebaseApp from '../firebaseconfig';
import Button from '../components/button';
import Input from '../components/input'

function Menu() {
  const [counter, setCounter] = useState([]);

  useEffect (() => {
    firebaseApp.firestore().collection('Menu').get().then(querySnapshot => {
      const menu = [];
      querySnapshot.forEach(doc => {
        menu.push(doc.data())
      });
      setCounter(menu)
    })
    
  }
  )  
  

  return (
    <div>
      {counter.map((item) => 
        <div>
          <p>{item.name} R$ {item.price}</p>
        </div> 
      )
      }
    </div>
  )
  }
  
  export default Menu
  // não precisa usar $, e não pode usar if, precisa usar ternário
import React, {useState} from 'react';
import Menu from './pages/lounge';
import './App.css';

function App() {
  document.title = `Burger Queen`
    
  
  return (
    <div className='App'>
      <Menu />


    </div>
    );
}
    


export default App
    
  // não precisa usar $, e não pode usar if, precisa usar ternário
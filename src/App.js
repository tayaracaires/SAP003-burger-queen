import React from 'react';
import Restaurant from './pages/lounge';
import Kitchen from './pages/kitchen';
import Header from './components/Header';
import Nav from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { StyleSheet, css } from 'aphrodite';

function App() {  
  return (
    <Router>
    <Header />
    <Nav />
    <div className={css(style.pages)}>
      <Switch>
        <Route path="/Lounge" component={Restaurant} />
        <Route path="/Kitchen" component={Kitchen} />
      </Switch>
    </div>
  </Router>
  )
}

const style = StyleSheet.create({

  pages: {
    fontFamily: ['Montserrat', 'sans-serif'],
    src: "url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap')",
  },

})

export default App
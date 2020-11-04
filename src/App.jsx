import React from 'react';
import Hello from './Hello';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import { Switch, Route, } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/Hello" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App

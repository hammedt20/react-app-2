import React from 'react';
import './App.css';
import Form from './components/form'
import Header from './components/header'
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div className="one"></div>
      <div className="two">
        <Header />
        <Form />
        <Footer />
      </div>
      <div className="three"></div>
    </div>
  )
}

export default App;


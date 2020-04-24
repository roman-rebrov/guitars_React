import React from 'react';
// Components
import Header from './Header';
import Baner from './Baner';
import Catalog from './Catalog';
import Footer from './Footer';
// CSS
import '../sass/App.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <Baner/>
        <Catalog/>
        <Footer/>
    </div>
  );
}

export default App;

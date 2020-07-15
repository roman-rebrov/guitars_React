import React from 'react';
// import browserHistoryLocation from 'browserHistoryLocation';
import {BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
// Components
import Header from './Header';
import Baner from './Baner';
import Catalog from './Catalog';
import Product from './Product';
import Footer from './Footer';
import CatalogLine from '../JS/catalogToHome'

// CSS
import '../sass/App.scss';

class App extends React.Component{
  render(){
    return (   
        <Router>
            <div className="App">
                <Header/>
                <Baner/>  
                  <Switch>
                    <Route exactly path='/home' component={CatalogLine}/>
                    <Route exactly  path='/cat' component={Product}/>
                  </Switch>  
                <Footer/>

          </div>
      </Router>
    );
  }
}

export default App;

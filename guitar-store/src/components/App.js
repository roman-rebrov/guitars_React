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
  constructor(){
    super()
    this.state = {
      addedProduct: []
    }
    this.handlerAddProd = this.handlerAddProd.bind(this)
  }
  handlerAddProd(){
    this.state.addedProduct.push()
  }
  render(){
    return (    
        <Router>
            <div className="App">
                <Header props={{added : this.state.addedProduct}}/>
                <Baner/>  
                <CatalogLine props={this.handlerAddProd}/>
                  <Switch>
                    {/* <Route exact  path='/' props={this.handlerAddProd} component={CatalogLine}/> */}
                    <Route   path='/cat' component={Product}/>
                  </Switch>    
                <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;

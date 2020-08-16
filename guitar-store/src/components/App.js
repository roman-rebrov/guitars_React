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
      addedProduct: [],
      btnText: 'Add'
    }
    this.handlerAddProd = this.handlerAddProd.bind(this)
  }
  handlerAddProd(props){
    let check;
    this.state.addedProduct.map((item, i) =>{
      if(props === item){check = i}
    });
    if (check === undefined){
      this.state.addedProduct.push(props)
      // this.state.btnText = 'Remove'
    }else{
      this.state.addedProduct.splice(check,1)
      // this.state.btnText = 'Add'
    }
    this.setState({
      addedProduct : this.state.addedProduct,
      btnText: this.state.btnText
    })
  }
  render(){
    return (    
        <Router>
            <div className="App">
                <Header props={{added : this.state.addedProduct}}/>
                <Baner/>  
                  <Switch>
                    <Route exact  path='/'  render={() => <CatalogLine
                     props={this.handlerAddProd}
                     btn={{text : this.state.btnText}}
                     />}/>
                    <Route   path='/cat' render={() => <Product/>}/>
                  </Switch>    
                <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;

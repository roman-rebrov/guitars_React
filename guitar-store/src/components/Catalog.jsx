import React, {useState, Component} from 'react';
import CatalogLine from '../JS/catalogToHome'
import Header from './Header';


class Catalog extends Component {
    constructor(props){
        super()
        this.prod = props.prod
        this.handler = props.props.handler
    }
    // const []
    addToCart(){
        // console.log('OK');
    }
    render(){
        // console.log(this.prod);
        return (
            <div className="catalog" >
                    <div className="producr-cart" >
                            <div className="producr-cart__title">
                                <span>
                                    {this.prod.obj.name}
                                </span>  
                            </div>
                            <div className="producr-cart__img flex-reg" onClick={()=> console.log(this.prod.obj.name)}>
                                <img src={this.prod.obj.img[0]} alt=""/>
                            </div>
                            <div className="producr-cart__cost">$  {this.prod.obj.prise}</div>
                            <div className="producr-cart__btn">
                                <div onClick={()=> {this.handler(this.prod.obj.id)}} className="btn flex-reg">купить</div>
                            </div>
                        </div>    
                        
                {/* <CatalogLine/> */}
            </div>
        );
    }
}

export default Catalog;


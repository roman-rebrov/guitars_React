import React, {useState, Component} from 'react';


class Catalog extends Component {
    constructor(props){
        super(props)
        this.prod = props.prod
        this.handler = props.props.handler
        this.btnText = props.btn
        this.state = {
            btnText: this.btnText
        }
    }
    addToCart(){
        // console.log('OK');
    }
    render(){
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
                            <div className="producr-cart__cost">$ {this.prod.obj.prise}</div>
                            <div className="producr-cart__btn">
                                <div onClick={()=> {this.handler(this.prod.obj.id)}} className="btn flex-reg">{this.props.btn}</div>
                            </div>
                        </div>    
                        
            </div>
        );
    }
}

export default Catalog;


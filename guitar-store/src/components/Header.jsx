import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
        this.x = props
        this.state = {
             addedProducts : this.x.props.added
        }

    }
    
    cartPage() {
        // setCost(cost + 1)
        // console.log(cost);
    }
    render() {
        console.log(this.x.props.added);
        return (
                <div className="header">
                    <header>
                        <div className="header-wrap flx-row-bet">
                            <nav>
                                <div className="nav-wrap flx-row-bet">
                                    <Link  to='/'>home</Link>
                                    <Link  to='/cat'>catalog</Link>
                                    <Link  to='/loc'>local</Link>
                                    <Link  to='/jj'>about</Link>
                                </div> 
                            </nav>
                            <Link  to='/pay'   className="cart-wrap flex-reg">
                                <i className="fas fa-shopping-cart"></i>
                                <div className="addProdWrap flex-reg">
                                    <span className="addProduct">{this.state.addedProducts.length>0? this.state.addedProducts.length : 0}</span>
                                </div>
                                
                            </Link>
                        </div>
                    </header>
                </div>

        )
    }
}
export default Header
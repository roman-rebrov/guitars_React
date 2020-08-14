import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    constructor(){
        super()
        this.x = {
            access : 2
        }
    }
    cartPage(){
        if( this.x.access >= 1 )
        {
            console.log(777);
            return (" to='/pay'")
        }else
        {
            alert('Карзина пуста')
        }
    }
    render() {
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
                            <Link  to='/pay'  onClick={()=> this.cartPage()} className="cart-wrap flex-reg">
                                <i className="fas fa-shopping-cart"></i>
                                <div className="addProdWrap flex-reg">
                                    <span className="addProduct"></span>
                                </div>
                                
                            </Link>
                        </div>
                    </header>
                </div>

        )
    }
}
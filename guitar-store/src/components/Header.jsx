import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [cost , setCost] = useState(0);
    const cartPage = () => {
        setCost(cost + 1)
        // console.log(cost);
    }
    // const render = () => {
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
                                    <span className="addProduct">{cost}</span>
                                </div>
                                
                            </Link>
                        </div>
                    </header>
                </div>

        )
    // }
}
export default Header
import React from 'react';
import {BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';


function Header() {
    return (
        <Router>
            <div className="header">
                <header>
                    <div class="header-wrap flx-row-bet">
                        <nav>
                            <div class="nav-wrap flx-row-bet">
                                <Link class='home' to="#">home</Link>
                                <Link to="#">catalog</Link>
                                <Link to="#">local</Link>
                                <Link to="#">about</Link>
                            </div>
                        </nav>
                        <div class="cart-wrap flex-reg">
                            <i class="fas fa-shopping-cart"></i>
                            <div class="addProdWrap flex-reg">
                                <span class="addProduct"></span>
                            </div>
                            
                        </div>
                    </div>
                </header>
            </div>
        </Router>
    )
}

export default Header;
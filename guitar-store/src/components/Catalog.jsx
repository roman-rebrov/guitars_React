import React from 'react';
import ProdCat from '../catalog/products.js'
import CatalogLine from '../JS/catalogToHome'


const ttt = ['This is a catalog!']
function Catalog() {
    return (
        <div className="catalog">
            { ttt[0] }
                   <div className="producr-cart">
                        <div className="producr-cart__title">
                            <span>
                                {ProdCat[0].name}
                            </span>  
                        </div>
                        <div className="producr-cart__img flex-reg">
                            <img src={ProdCat[0].img[0]} alt=""/>
                        </div>
                        <div className="producr-cart__cost">$  {ProdCat[0].prise}</div>
                        <div className="producr-cart__btn">
                            <div className="btn flex-reg">купить</div>
                        </div>
                    </div>
                    
            <CatalogLine/>
        </div>
    );

}

export default Catalog;


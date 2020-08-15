import React, {useState} from 'react';
import CatalogLine from '../JS/catalogToHome'
import Header from './Header';


function Catalog({prod}) {
    // const []
    const addToCart = () =>{
        console.log('OK');
    }
    return (
        <div className="catalog" >
                   <div className="producr-cart" >
                        <div className="producr-cart__title">
                            <span>
                                {prod.obj.name}
                            </span>  
                        </div>
                        <div className="producr-cart__img flex-reg" onClick={()=> console.log(prod.obj.name)}>
                            <img src={prod.obj.img[0]} alt=""/>
                        </div>
                        <div className="producr-cart__cost">$  {prod.obj.prise}</div>
                        <div className="producr-cart__btn">
                            <div onClick={()=> <Header count={{count:addToCart}} />} className="btn flex-reg">купить</div>
                        </div>
                    </div>    
                    
            {/* <CatalogLine/> */}
        </div>
    );

}

export default Catalog;


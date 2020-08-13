import React from 'react';
import CatalogLine from '../JS/catalogToHome'


const ttt = ['This is a catalog!']
function Catalog({prod}) {
    return (
        <div className="catalog">
                   <div className="producr-cart">
                        <div className="producr-cart__title">
                            <span>
                                {prod.obj.name}
                            </span>  
                        </div>
                        <div className="producr-cart__img flex-reg">
                            <img src={prod.obj.img[0]} alt=""/>
                        </div>
                        <div className="producr-cart__cost">$  {prod.obj.prise}</div>
                        <div className="producr-cart__btn">
                            <div onClick={()=>console.log(prod.obj.name)} className="btn flex-reg">купить</div>
                        </div>
                    </div>    
                    
            {/* <CatalogLine/> */}
        </div>
    );

}

export default Catalog;


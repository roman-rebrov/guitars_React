import React from 'react';
import ProdCat from '../catalog/products.js'

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
                    

        </div>
    );

}

export default Catalog;

// function catalogLine() {

// const cotalogWrap = document.querySelector('.catalog')
//  ProdCat.forEach((ProdCat,{id,name,img,prise}, i ) => {

//     cotalogWrap.innerHTML = `
//         <div class="producr-cart">
//         <div class="producr-cart__title">
//             <span>
//                 ${ProdCat[i].name}
//             </span>
//         </div>
//         <div class="producr-cart__img flex-reg">
//             <img src="${ProdCat[i].img[0]}" alt="">
//         </div>
//         <div class="producr-cart__cost">$  ${ProdCat[i].prise}</div>
//         <div class="producr-cart__btn">
//             <div class="btn flex-reg">купить</div>
//         </div>
//         </div>
// `

// })
// }
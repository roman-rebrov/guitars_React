import React from 'react'
import Catalog from '../components/Catalog'
import ProdCat from '../catalog/products.js'
import '../sass/catToHome.sass'


function catalogLine() {
    let each = () => {
        ProdCat.map((ProdCat,{id,name,img,prise}, i ) => {
            console.log(ProdCat.id);
            // return ProdCat.id
            return <div><img src={ProdCat[1].img[0]}/></div>
        })
        // return <div><img src={ProdCat[1].img[0]}/></div>

    };
    return(
        <div className='loop'>
            {/* {ProdCat.map((obj, i) => <div><img src={ProdCat[i].img[0]}/></div>)} */}
            {ProdCat.map((obj, i) => <Catalog/> )}
            {/* {each()} */}
        </div> 
    )
// const cotalogWrap = document.querySelector('.catalog')
//  ProdCat.forEach((ProdCat,{id,name,img,prise}, i ) => {
    // cotalogWrap.innerHTML = `
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
}
// ReactDOM.render(
//       <React.StrictMode>
//     <div>456</div>
//       </React.StrictMode>,
//     document.querySelector('.catalog')
// )
export default catalogLine;
// serviceWorker.unregister();

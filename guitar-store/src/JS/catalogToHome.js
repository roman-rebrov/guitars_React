import ProdCat from '../catalog/products.js'


function catalogLine() {

const cotalogWrap = document.querySelector('.catalog')
 ProdCat.forEach((ProdCat,{id,name,img,prise}, i ) => {
    cotalogWrap.innerHTML = `
        <div class="producr-cart">
        <div class="producr-cart__title">
            <span>
                ${ProdCat[i].name}
            </span>
        </div>
        <div class="producr-cart__img flex-reg">
            <img src="${ProdCat[i].img[0]}" alt="">
        </div>
        <div class="producr-cart__cost">$  ${ProdCat[i].prise}</div>
        <div class="producr-cart__btn">
            <div class="btn flex-reg">купить</div>
        </div>
        </div>
`

})
}

export default catalogLine;
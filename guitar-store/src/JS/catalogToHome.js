import React from 'react'
import Catalog from '../components/Catalog'
import ProdCat from '../catalog/products.js'
import '../sass/catToHome.sass'
import ProdDitals from '../components/ProdDitails'

function catalogLine() {
    //     ProdCat.map((ProdCat,{id,name,img,prise}, i ) => {
    //         // console.log(ProdCat.id);
    //         // return ProdCat.id
    //         return <div><img src={ProdCat[1].img[0]}/></div> 
    //     })
        // return <div><img src={ProdCat[1].img[0]}/></div>
    return( 
        <div className='loop'> 
            {/* <ProdDitals prod={{ProdCat}} /> */}
            {ProdCat.map((obj, i) => <Catalog prod={{obj}}/> )}
        </div> 
    )

}

export default catalogLine;

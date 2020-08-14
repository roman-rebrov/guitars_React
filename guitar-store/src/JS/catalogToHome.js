import React from 'react'
import Catalog from '../components/Catalog'
import ProdCat from '../catalog/products.js'
import '../sass/catToHome.sass'
import ProdDitals from '../components/ProdDitails'

function catalogLine() {

    return( 
        <div className='loop' > 
            {ProdCat.map((obj, i) => <Catalog prod={{obj}}/> )}
        </div> 
    )

}

export default catalogLine;

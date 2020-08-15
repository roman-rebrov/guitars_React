import React, {Component} from 'react'
import Catalog from '../components/Catalog'
import ProdCat from '../catalog/products.js'
import '../sass/catToHome.sass'
import ProdDitals from '../components/ProdDitails'

class catalogLine extends Component {
    constructor(props){
        super(props)
        this.handlerProps = props.props

    }
    render(){
        const handler = this.handlerProps
        console.log(handler);

        return( 
            <div className='loop' > 
                {ProdCat.map((obj, i) => <Catalog prod={{obj}} props={{handler}}/> )}
            </div> 
        )
    }

}

export default catalogLine;

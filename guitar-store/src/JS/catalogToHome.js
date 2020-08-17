import React, {Component} from 'react'
import Catalog from '../components/Catalog'
import ProdCat from '../catalog/products.js'
import '../sass/catToHome.sass'

class catalogLine extends Component {
    constructor(props){
        super(props)
        this.handlerProps = props.props
    }
    render(){
        const handler = this.handlerProps

        return( 
            <div className='loop' > 
                {ProdCat.map((obj, i) => <Catalog key={obj.id} btn={this.props.btn.text} prod={{obj}} props={{handler}}/> )}
            </div> 
        )
    }

}

export default catalogLine;
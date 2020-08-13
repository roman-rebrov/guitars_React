import React, { Component } from 'react'

class ProdDitails extends Component {
    constructor({prod}){
        super({prod})
        this.prod = prod.ProdCat
    }
 
    render() {
        return ( 
            <div>
                {this.prod[0].name}
            </div>
        )
    }
}

export default ProdDitails

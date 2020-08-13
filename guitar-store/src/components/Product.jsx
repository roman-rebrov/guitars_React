import React from 'react';
import ProdCat from '../catalog/products.js'

function Product() {
    return (
        <div className="catalog">
            {
                ProdCat[0].name
            }
            <div className="g">
                <span>
                    This is Local
                </span>
            </div>
        </div>
    );
}
export default Product;

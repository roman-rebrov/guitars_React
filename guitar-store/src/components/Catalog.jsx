import React from 'react';
import ProdCat from '../catalog/products.js'

const ttt = ['This is a catalog!']
function Catalog() {
    return (
        <div className="catalog">
            {
                ttt[0]
            }
        </div>
    );
}
export default Catalog;

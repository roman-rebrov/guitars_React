import React from 'react'
import banerImg1 from '../img/b-2.jpg';

function Baner() {
    return(
        <div className="baner flex-reg">
        <div className="logo-wrap">
            <div className="logo">
                Guitar Heroes
            </div>
        </div>
        <div className="img-wrap">
            {/* <!-- <img src="../img/b-1.jpg" alt=""> --> */}
            <img src={banerImg1} alt="" />
            {/* <!-- <img src="../img/b-3.png" alt=""> --> */}
        </div>
        <div className="text-1 text flex-reg">
            <span className='txt-block-1'>14 iGF</span>
            <span>
                <i className="fas fa-compact-disc"></i>
            </span>
        </div>
        <div className="text-2 text flex-reg">
            <span>
                <i className="fas fa-volume-up"></i> 
            </span>
        </div>
    </div>
    )
}

export default Baner;

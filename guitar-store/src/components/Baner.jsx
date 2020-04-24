import React from 'react'
import banerImg1 from '../img/b-2.jpg';

function Baner() {
    return(
        <div class="baner flex-reg">
        <div class="logo-wrap">
            <div class="logo">
                Guitar Heroes
            </div>
        </div>
        <div class="img-wrap">
            {/* <!-- <img src="../img/b-1.jpg" alt=""> --> */}
            <img src={banerImg1} alt="" />
            {/* <!-- <img src="../img/b-3.png" alt=""> --> */}
        </div>
        <div class="text-1 text flex-reg">
            <span class='txt-block-1'>14 iGF</span>
            <span>
                <i class="fas fa-compact-disc"></i>
            </span>
        </div>
        <div class="text-2 text flex-reg">
            <span>
                <i class="fas fa-volume-up"></i> 
            </span>
        </div>
    </div>
    )
}

export default Baner;

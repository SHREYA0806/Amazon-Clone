import React from 'react';

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css"
function Carousels() {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB660400564_.jpg" />
                    
                </div>
                <div>
                    <img src="https://www.amazon.in/b/ref=surl_fashion?node=6648217031&pf_rd_r=PJHEJFBCR0B9N3P0818G&pf_rd_p=28c7006e-0943-42fb-99fd-65cbcf79239b" />
                   
                </div>
                <div>
                    <img src="https://www.amazon.in/dp/B086977TR6?pf_rd_r=PJHEJFBCR0B9N3P0818G&pf_rd_p=1de7ee50-161d-424f-8ed9-29462ebf67ff" />
                   
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels

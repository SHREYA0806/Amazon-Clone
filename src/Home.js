import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB660400564_.jpg" alt=""></img> */}
                <Carousel className="home_image">
                <div>
                    <img  src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB660400564_.jpg" />
                    
                </div>
                <div>
                    <img  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Flip/Eng_MegaFashionSale_March/Rev_GW_PC_BUNK_1500x600_1._CB657182333_.jpg" />
                   
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/SUD_Mar/Family/D21926257_IN_WLME_SUD_SamsungGalaxyM_Family_DesktopTallHero_1500x600._CB657441712_.jpg" />
                   
                </div>
            </Carousel>
                <div className="home_row">
                    <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.96} image='https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg' rating = {5} />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />                                                                  
                </div>
                <div className="home_row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="4903850"
                        title="Junkyard Vinyl Waterproof Stickers for Kids, Scrapbooking."
                        price={251}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51m6tR0YBlL._AC_UL160_SR160,160_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Logitech B170 Wireless Mouse, 2g"
                        price={599.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/31N2n4tGvGL._AC_SY200_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Wimpex Velvet Soft 2 Ply Ultra Soft Designe"
                        price={280.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71skpmiVyQL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                     <Product
                        id="32543545"
                        title="Wimpex Velvet Soft 2 Ply Ultra Soft "
                        price={2880.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/312YOAG9luL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

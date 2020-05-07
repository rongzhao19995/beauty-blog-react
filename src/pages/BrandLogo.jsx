import React from 'react';
import Slider from "react-slick";
import {isMobile} from 'react-device-detect';

const BrandLogo = () => {

    const settings = {
        dots: isMobile ? true : false,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <React.Fragment>
            <section className="brand-logo-section" >
                <Slider {...settings}>
                    <div className="slick-item">
                        <img src="https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-4.jpg" alt="img" />
                    </div>
                    <div className="slick-item">
                        <img src="https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-2.jpg" alt="img" />
                    </div>
                    <div className="slick-item">
                        <img src="https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-4.jpg" alt="img" />
                    </div>
                    <div className="slick-item">
                        <img src="https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-2.jpg" alt="img" />
                    </div>
                    <div className="slick-item">
                        <img src="https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy.jpg" alt="img" />
                    </div>

                </Slider>
            </section>

        </React.Fragment>
    );
};

export default BrandLogo;
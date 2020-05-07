import React from 'react';
import Slider from "react-slick";
import {isMobile} from 'react-device-detect';

const brandLogoList = [
    'https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-4.jpg',
    'https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-2.jpg',
    'https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy.jpg',
    'https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-4.jpg',
    'https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy-2.jpg',
    'https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Rectangle-4-copy.jpg',
];

const CardSection =  ({ img}) => {
    return(
        <div className="slick-item">
            <img src={img} alt="img" />
        </div>
    )
};


const listItems = brandLogoList.map((obj) => (
    <CardSection key={obj} img={obj}/>

));

const BrandLogo = () => {

    const settings = {
        // dots: isMobile ? true : false,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <React.Fragment>
            <section className="brand-logo-section" >
                <Slider {...settings}>
                    {listItems}
                </Slider>
            </section>

        </React.Fragment>
    );
};

export default BrandLogo;
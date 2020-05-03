import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import Artist from './Artist';
import ServiceDetails from './ServiceDetails';

const list = [
    <Artist />,
    <ServiceDetails />,
    <Artist />
  ]



const templates = list.map((data, index) =>
   <div key={index} > {data}</div>
);


const Quotes = () => {

    return (
        <React.Fragment>
            <section className="quotes-section">
                <div className="row m-0">
                    <div className="header col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-4">Few Quotes</div>
                    <div className="sub-header col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-2">from our clients</div>

                    <AwesomeSlider className="awesome-slider" animation="" selected={1} infinite={true} mobileTouch={true}>
                    {/* {templates} */}
                    <div className="changeable-wrapper">
                        <div className="avatar col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3">
                            <img src="http://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/matheus-ferrero-288182-unsplash2.png" alt=""/>
                        </div>
                        <div className="desc col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent in velit vehicula, iaculis tortor eu, placerat elit. Aenean iaculis nulla nec condimentum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet fermentum accumsan.</div>
                        <div className="name col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3">Philip Jason</div>
                        <div className="remark col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3">99</div>
                    </div>
                    <div className="changeable-wrapper">
                        <div className="avatar col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3  px-5">
                            <img src="http://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/matheus-ferrero-288182-unsplash.png" alt=""/>
                        </div>
                        <div className="desc col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3 px-5">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent in velit vehicula, iaculis tortor eu, placerat elit. Aenean iaculis nulla nec condimentum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet fermentum accumsan.</div>
                        <div className="name col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3 px-5">Philip Jason</div>
                        <div className="remark col-lg-12 col-md-12 col-sm-12 col-xs-12 p-3 px-5">99</div>
                    </div>
                    </AwesomeSlider>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Quotes;
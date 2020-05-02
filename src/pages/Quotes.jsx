import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Quotes = () => {

    const quotesSectionStyle = {
        height:'100vh',
        width: '100vw'
      };

    return (
        <React.Fragment>
            <section className="quotes-section"  style={quotesSectionStyle}>
                <div className="container">
                    <AwesomeSlider animation="cubeAnimation">
                    <div>
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent in velit vehicula, iaculis tortor eu, placerat elit. Aenean iaculis nulla nec condimentum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet fermentum accumsan. 						</div>
                    <div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet fermentum accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Praesent in velit vehicula, iaculis tortor eu, placerat elit.						</div>
                    </AwesomeSlider>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Quotes;
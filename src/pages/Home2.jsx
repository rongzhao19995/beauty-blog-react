import React from 'react';

const Home2 = () => {

    const home2SectionStyle = {
        height:'100vh'
      };

    return (
        <React.Fragment>
            <section className="home2-section" style={home2SectionStyle}>
            <div className="container">
                <div className="row">
                    <p className="text-left">Left aligned text on all viewport sizes.</p>
                    <p className="text-center">Center aligned text on all viewport sizes.</p>
                    <p className="text-right">Right aligned text on all viewport sizes.</p>

                    <p className="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
                    <p className="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
                    <p className="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
                    <p className="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
                    <p className="text-left">Left aligned text on all viewport sizes.</p>
                    <p className="text-center">Center aligned text on all viewport sizes.</p>
                    <p className="text-right">Right aligned text on all viewport sizes.</p>

                    <p className="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
                    <p className="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
                    <p className="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
                    <p className="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
                </div>
            </div>
            </section>
        </React.Fragment>

    );
};

export default Home2;
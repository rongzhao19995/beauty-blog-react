import React from 'react';

const MeetNeeds = () => {

    const home2SectionStyle = {
        height:'100%',
        width: '100vw'
      };

    return (
        <section className="meet-needs-section" style={home2SectionStyle}>
            <div class="container-fluid parallax-2 bg-img2" >
                <div class="container">
                    <div className="row py-9">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="text-wrapper py-5 col-lg-8">
                                <div className="header">
                                    <p>MEET</p>
                                    <p>YOUR</p>
                                    <p>NEEDS</p>
                                </div>
                                <div className="block-img py-3">
                                    <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-4.png" alt="img"/>
                                </div>
                                <div className="sub-header py-3">
                                You can order our products at home and we will be happy to deliver them to you
                                </div>
                                <div className="btn-wrapper pt-6">
                                <a href="https://twitter.com/Dave_Conner" class="btn btn-1">
                                    <svg><rect x="0" y="0" fill="none" width="100%" height="100%"/></svg>
                                    SHOP ME
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
                            <div className="img-wrapper">
                             <img class="image-items" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/rigdt-side11.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <img src="https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Layer-135316.jpg" style={parallexPicStyle} alt="img"></img> */}
        </section>
    );
};

export default MeetNeeds;
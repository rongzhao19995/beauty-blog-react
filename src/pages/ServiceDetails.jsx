import React from 'react';


const ServiceDetails = () => {

    const home2SectionStyle = {
        height:'100vh',
        width: '100vw'
      };

    //   const parallexPicStyle = {
    //     width: '100vw'
    //   };


    return (
        <section className="home2-section" style={home2SectionStyle}>
            <div class="container-fluid parallax bg-img1">
                <div class="middle">
                    <div class="container" style={{'max-width': '550px'}}>
                        <blockquote class="text-center">
                            <i class="fa fa-quote-left fa-3x fa-pull-left" aria-hidden="true"></i>
                            <p class="p-9$ lead">Many of my movies have strong female leads—brave, self-sufficient girls that don’t think twice about fighting for what they believe in with all their heart. They’ll need a friend, or a supporter, but never a saviour.</p>
                            <footer class="blockquote-footer text-uppercase text-white">Hayao Miyazaki</footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* <img src="https://cdn.jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Layer-135316.jpg" style={parallexPicStyle} alt="img"></img> */}
        </section>
    );
};

export default ServiceDetails;
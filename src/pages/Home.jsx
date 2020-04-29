import React, {useEffect} from 'react';
import Parallax from 'parallax-js'
import Tilt from 'react-parallax-tilt';


const Home = ( {stickyRef} ) => {

    useEffect(() => {

        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
        parallaxInstance.friction(0.2, 0.2);
        // parallaxInstance.hoverOnly = true;
        parallaxInstance.limit(5, 4);
        parallaxInstance.scalar(2, 2);
    
      }, []);



    return (
        <React.Fragment>
            <section ref={stickyRef} className="main-section" >
            <div className="container">
                <div className="tilt-logo">
                    {/* <Tilt>
                        <div style={{ height: '100vh', width: '100vw',position: 'relative', background: 'url(https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/maybelline-highligher-facestudio-master-chrome-metallic-highlighter-molten-gold-041554538281-2t.png) no-repeat' }}>
                            <img className="titl-logo-img" src={'https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Group-992.png'}></img>
                        </div>
                    </Tilt> */}
                    <div  id="scene">
                        <div  class="layer" data-depth="10"><img className="layer-bg" src="https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/maybelline-highligher-facestudio-master-chrome-metallic-highlighter-molten-gold-041554538281-2t.png" alt="bg"></img></div >
                        <div  class="layer" data-depth="5"><img className="layer-logo" src="https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Group-992.png" alt="logo"></img></div >
                    </div >
                </div>
                <div className="text-wrapper">
                    <div className="row"><div className="text-header">Le Beauté</div></div>
                    <div className="row"><div className="text-header">Just For You</div></div>
                    <div className="row"><div className="text-subheader">Scroll down for some magic.</div></div>
                </div>
            </div>
            </section>
        </React.Fragment>

    );
};

export default Home;
import React, {useState} from 'react';
import { Parallax } from 'react-scroll-parallax';

const memberList = [
    { key: "item1", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-31.jpg", "img_hover":'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/services-hover9.jpg', desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
    { key: "item2", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-41.jpg", "img_hover":'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/services-hover9.jpg', desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
    { key: "item3", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-5.jpg", "img_hover":'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/services-hover9.jpg',  desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
    { key: "item4", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-6.jpg", "img_hover":'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/services-hover9.jpg',  desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
  ];


const CardSection = ({ img_hover, img, desc }) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    
    return (
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 p-2 d-flex flex-column justify-content-center align-items-center">
            {/* <div className="container"> */}
            <div className="card-img-wrapper" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <div className="card-img">
                    <img src={hovered ? img_hover : img} alt="img"/>
                </div>
            </div>
            <div className="card-content-wrapper">
                <div className="card-desc px-4 py-3">
                    {desc}
                </div>
            </div>
            </div>
        // </div>
    );
  };

  const listItems = memberList.map((obj) => (
    <CardSection key={obj.key} img_hover={obj.img_hover} img={obj.img} desc={obj.desc}/>
  ));

const ServiceType = () => {

    const home2SectionStyle = {
        height:'100%',
        width: '100vw'
      };




    return (

        <React.Fragment>
            <section className="home2-section" style={home2SectionStyle}>
                <div className="container">
                    <div className="service-type row py-6">
                        {listItems}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ServiceType;
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const memberList = [
    { key: "item1", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-31.jpg", desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
    { key: "item2", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-41.jpg", desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
    { key: "item3", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-5.jpg", desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
    { key: "item4", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/Group-4-copy-6.jpg", desc: "Mauris efficitur purus id neque tempor, eu faucibus ligula sodales." },
  ];

const CardSection = ({ img, desc }) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 p-2 d-flex flex-column justify-content-center align-items-center">
            <div className="card-img-wrapper">
                <div className="card-img">
                    <img src={img} alt="img"/>
                </div>
            </div>
            <div className="card-content-wrapper">
                <div className="card-desc p-4">
                    {desc}
                </div>
            </div>
        </div>
    );
  };

  const listItems = memberList.map((obj) => (
    <CardSection key={obj.key} img={obj.img} desc={obj.desc}/>
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
                    <div className="service-type row pt-9">
                        {listItems}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ServiceType;
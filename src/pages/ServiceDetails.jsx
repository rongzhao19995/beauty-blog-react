import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const accordList = [
    { key: "item1", t1: "Hairdresser", h1: "Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:", d1: "20$ Long hairstyle", d2: "25$ Medium hairstyle", d3: "30$ Medium hairstyle", d4: "35$ Medium hairstyle"},
    { key: "item1", t1: "Manicure & Pedicure", h1: "Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:", d1: "20$ Long hairstyle", d2: "25$ Medium hairstyle", d3: "30$ Medium hairstyle", d4: "35$ Medium hairstyle"},
    { key: "item1", t1: "Consultation", h1: "Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:", d1: "20$ Long hairstyle", d2: "25$ Medium hairstyle", d3: "30$ Medium hairstyle", d4: "35$ Medium hairstyle"},
    { key: "item1", t1: "Massages", h1: "Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:", d1: "20$ Long hairstyle", d2: "25$ Medium hairstyle", d3: "30$ Medium hairstyle", d4: "35$ Medium hairstyle"},
    { key: "item1", t1: "Skin Care", h1: "Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:", d1: "20$ Long hairstyle", d2: "25$ Medium hairstyle", d3: "30$ Medium hairstyle", d4: "35$ Medium hairstyle"},
];

const CardSection = ({ t1, h1, d1, d2, d3, d4, idx}) => {
    console.log({ t1, h1, d1, d2, d3, d4, idx});
    return (
        <Card>
        <Accordion.Toggle as={Card.Header}  eventKey={idx}>
            {t1}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={idx}>
        <Card.Body className="py-3">
            <p><span>{h1}</span></p>
            <ul>
            <li><span>{d1}</span></li>
            <li><span>{d2}</span></li>
            <li><span>{d3}</span></li>
            <li><span>{d4}</span></li>
            </ul>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    )
};


const listItems = accordList.map((obj, idx) => (
    <CardSection key={obj} t1={obj.t1} h1={obj.h1} d1={obj.d1} d2={obj.d2} d3={obj.d3} d4={obj.d4} idx={idx}/>

));


const ServiceDetails = () => {

    return (
        <section className="service-type-section">
            <div class="container-fluid parallax bg-img1" >
                <div class="container">
                    <div className="row py-9">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="text-wrapper">
                                <div className="header">
                                    BEAUTY<br/>LABORATORY
                                </div>
                                <div className="sub-header py-3">
                                    Prices and services we offer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="ddl-wrapper">
                                <Accordion>
                                    {listItems}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
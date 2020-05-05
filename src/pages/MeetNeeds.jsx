import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';



const MeetNeeds = () => {

    const home2SectionStyle = {
        height:'100%',
        width: '100vw'
      };

    return (
        <section className="home2-section" style={home2SectionStyle}>
            <div class="container-fluid parallax-2 bg-img2" >
                <div class="container">
                    <div className="row py-9">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="text-wrapper py-5">
                                <div className="header">
                                    MEET<br/>YOUR <br/> NEEDS
                                </div>
                                <div className="sub-header py-3">
                                You can order our products at home and we will be happy to deliver them to you
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="ddl-wrapper">
                             <img class="sh-image-url" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/rigdt-side11.jpg" alt=""/>
                                {/* <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header}  eventKey="0" >
                                            Hairdresser
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body className="py-3 px-5">
                                            <p><span >Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:</span></p>
                                            <ul>
                                            <li><span >20$ Long hairstyle </span></li>
                                            <li><span >25$ Medium hairstyle </span></li>
                                            <li><span >46$ Regular coloring </span></li>
                                            <li><span >50$ Ombre coloring</span></li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Manicure & Pedicure
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body className="py-3 px-5">
                                            <p><span >Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:</span></p>
                                            <ul>
                                            <li><span >20$ Long hairstyle </span></li>
                                            <li><span >25$ Medium hairstyle </span></li>
                                            <li><span >46$ Regular coloring </span></li>
                                            <li><span >50$ Ombre coloring</span></li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            Consultation
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                        <Card.Body className="py-3 px-5">
                                            <p><span >Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:</span></p>
                                            <ul>
                                            <li><span >20$ Long hairstyle </span></li>
                                            <li><span >25$ Medium hairstyle </span></li>
                                            <li><span >46$ Regular coloring </span></li>
                                            <li><span >50$ Ombre coloring</span></li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            Massages
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                        <Card.Body className="py-3 px-5">
                                            <p><span >Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:</span></p>
                                            <ul>
                                            <li><span >20$ Long hairstyle </span></li>
                                            <li><span >25$ Medium hairstyle </span></li>
                                            <li><span >46$ Regular coloring </span></li>
                                            <li><span >50$ Ombre coloring</span></li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">
                                            Skin Care
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                        <Card.Body className="py-3 px-5">
                                            <p><span >Ut imperdiet urna sed eros feugiat sodales. Curabitur tellus lorem, volutpat eu sem ut, facilisis elementum nulla:</span></p>
                                            <ul>
                                            <li><span >20$ Long hairstyle </span></li>
                                            <li><span >25$ Medium hairstyle </span></li>
                                            <li><span >46$ Regular coloring </span></li>
                                            <li><span >50$ Ombre coloring</span></li>
                                            </ul>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion> */}
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
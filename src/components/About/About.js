import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArchive,
    faGraduationCap,
    faUserGraduate,
    faCoins
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div>
                <h1><span className="text-danger">About</span> Us</h1>
            </div>
            <Row xs={1} md={2} className="g-4 row">
                <div>
                    <div className="about-info">
                        <h3 className="heading text-success">Onny's Acting Club</h3>
                        <p className="text-dark fw-normal">Twee echo park celiac YOLO dreamcatcher bushwick. <br /> Pitchfork fam tousled sustainable mumblecore tote bag trust fund <br /> tacos organic four dollar toast kickstarter pork belly.</p>

                    </div>
                    <div className="d-flex justify-content-around pt-5">
                        <div>
                            <div className="icon d-flex">
                                <FontAwesomeIcon icon={faArchive} />
                                <div>
                                    <h2 className="text-danger text-start">2003</h2>
                                    <h5>YEAR FOUNDED</h5>
                                </div>
                            </div>
                            <div className="icon d-flex">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <div>
                                    <h2 className="text-danger text-start">546</h2>
                                    <h5>STUDENTS</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="icon d-flex">
                                <FontAwesomeIcon icon={faUserGraduate} />
                                <div>
                                    <h2 className="text-danger text-start">1679</h2>
                                    <h5>CLASSES HELD</h5>
                                </div>
                            </div>
                            <div className="icon d-flex">
                                <FontAwesomeIcon icon={faCoins} />
                                <div>
                                    <h2 className="text-danger text-start">24</h2>
                                    <h5>CONCERN</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <img className="w-75" src="http://tabula.bold-themes.com/shady/wp-content/uploads/sites/4/2019/05/inner_hero_men.png" alt="" />
                </div>

            </Row>
        </div>
    );
};

export default About;
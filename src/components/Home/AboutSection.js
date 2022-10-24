import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section className="about-area p-relative pt-90 pb-70">
            <div className="container">
                <img className="about-shape" src="assets/img/shape/education-shape-03.png" alt="shape"/>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img position-relative mb-50">
                            <div className="about-main-img">
                                <img src="assets/img/about/about-img-1.png" alt="about"/>
                            </div>
                            <img className="about-shape-1" src="assets/img/shape/education-shape-01.png" alt="about"/>
                            <img className="about-shape-2" src="assets/img/shape/education-shape-02.png" alt="about"/>
                            <img className="about-shape-3" src="assets/img/shape/education-shape-05.png" alt="about"/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="about-content mb-50">
                            <div className="section-title mb-30">
                                <h2>Increase Your High <br/>
                                    Education Level with <span className="down-mark-line-2">Eduman</span>
                                </h2>
                            </div>
                            <div className="student-choose-list">
                                <p className=" mb-30">Helping employees gain skills and providing career development often
                                    take a back seat
                                    to business priorities but workplace. We offer fresh courses on emerging topics that
                                    keep your level.</p>
                                <ul>
                                    <li><i className="fas fa-check-circle"></i>Course curriculum </li>
                                    <li><i className="fas fa-check-circle"></i>Easy to enroll courses</li>
                                    <li><i className="fas fa-check-circle"></i>Know the latest technology</li>
                                </ul>
                            </div>

                            <Link href="/course"><a className="edu-btn">Apply now</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;